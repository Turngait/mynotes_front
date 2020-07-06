import {API_URL} from '../../config/api';

export function openAddIncome() {
  return (dispatch) => {
    dispatch({type: 'OPEN_ADD_INCOME'})
  }
}

export function closeAddIncome() {
  return (dispatch) => {
    dispatch({type: 'CLOSE_ADD_INCOME'})
  }
}

export function setIncomeTitle(data) {
  return (dispatch) => {
    dispatch({type: 'SET_INCOME_TITLE', payload: data})
  };
}

export function setIncomeAmmount(data) {
  return (dispatch) => {
    dispatch({type: 'SET_INCOME_AMOUNT', payload: data})
  };
}

export function setIncomeDescription(data) {
  return (dispatch) => {
    dispatch({type: 'SET_INCOME_DESCRIPTION', payload: data})
  };
}

export function setIncomeDate(data) {
  return (dispatch) => {
    dispatch({type: 'SET_INCOME_DATE', payload: data})
  };
}

export function getIncomes(token) {
  return (dispatch) => {
    const period = new Date().toISOString().slice(0,7);
    fetch(API_URL + '/fin/income/get/' + period + '/' + token)
    .then(res => {return res.json()})
    .then(data => {
      if(data.status === 200) {
        dispatch({type: 'SET_INCOMES', payload: data.data.incomes});

        if (data.data.incomes.length > 0) {
          dispatch({type: 'SET_INCOMES_BY_PERIOD', payload: data.data.incomes[0].incomeByThisMonth});
        }
      }
    })
  }
}

export function addIncomeItem(data) {
  return (dispatch) => {
    const {token} = data;

    fetch(API_URL + '/fin/income/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      mode: 'cors',
      body: JSON.stringify(data)
    })
    .then(async res => {
      if(res.status === 204) {
        dispatch({type: 'CLOSE_ADD_INCOME'});
        dispatch({type: 'CLEAR_INCOME'});
        dispatch(getIncomes(token));
        return;
      } else if(res.status === 422) {
        const data = await res.json()
        if(data.errors) {
          const {errors} = data.errors
          dispatch({type:'SET_ADD_INCOME_ERROR', payload: errors[0].msg})
        }
      }
    })
  }
}

export function deleteIncome(data) {
  return (dispatch) => {
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
        dispatch(getIncomes(token));
      }
    })
  }
}

export function getIncomeForPeriod (data) {
  return (dispatch) => {
    const {period} = data;
    fetch(API_URL + '/fin/income/get/' + period + '/' + data.token)
    .then(res => {return res.json()})
    .then(data => {
      dispatch({type: 'SET_INCOMES', payload: data.data.incomes})

      dispatch({
        type: 'SET_INCOME_PERIOD',
        payload: period
      })
    })
  }
}