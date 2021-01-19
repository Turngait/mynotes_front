import {API_URL} from '../../../../../../config/api';

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