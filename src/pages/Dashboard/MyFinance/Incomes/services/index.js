import {API_URL} from 'config/api';

export async function saveIncome(income, token, setIncomes, setError) {
  const status = await fetch(API_URL + '/fin/income/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    mode: 'cors',
    body: JSON.stringify({income, token})
  }).then(async res => {
    if (res.status === 201) {
      const data = await res.json();
      const {incomes} = data.data;
      setIncomes(incomes);
      return true;
    } else if (res.status === 422) {
      const data = await res.json();
      if (data.errors) {
        const {errors} = data.errors;
        setError(errors[0].msg);
        return false;
      }
    } else {
      setError(res.status);
      return false;
    }
  })

  return status;
}

export async function saveSource(source, token, setIncomes, setError) {
  const status = await fetch(API_URL + '/fin/income/addsource', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    mode: 'cors',
    body: JSON.stringify({source, token})
  }).then(async res => {
    if(res.status === 201) {
      const data = await res.json();
      const {incomes} = data.data;
      setIncomes(incomes);
    }
    return res.status
  });

  if(status === 201) return true;

  if(status === 403) setError('Заголовок должен быть более 3х символов.');
  else setError('Проблема на сервере');
  
  return false;
}

export function deleteIncome(data, getIncomesItems) {
  const {target, token} = data;
  const id = target.dataset.itemId;

  fetch(API_URL + '/fin/income/delete/' + token + '/' + id, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    mode: 'cors'
    })
  .then(res => {
    if(res.status === 204) {
      getIncomesItems(token);
    }
  })
}

export function incomesFilterHook(incomes, source_id) {
  let filteredIncomes = [];
  for (const income of incomes) {
    for (const item of income.items) {
      if(item.id_source.toString() === source_id) {
        filteredIncomes.push(item);
      }
    }
  }
  return filteredIncomes;
}

export function showSourceName(data) {
  const {id_source} = data;
  if (data.sourses) {
    for(let source of data.sourses) {
      if (source._id === id_source) {
        return source.title
      }
    }
  }

  return 'None'
}

export function getIncomesByPeriodService(period, token, dispathcer) {
  fetch(API_URL + '/fin/income/get/' + period + '/' + token)
  .then(res => {return res.json()})
  .then(data => {
    const {incomes} = data.data;
    dispathcer(incomes, period);
  })
}