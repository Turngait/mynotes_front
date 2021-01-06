import {API_URL} from '../../../config/api';
export async function getFinData(token, period) {
  const {costs, incomes, budget} = await fetch(API_URL + '/fin/getfindata', {
    mode: 'cors',
    method: 'POST',
    body: JSON.stringify({token, period}),
    headers: {'Content-Type': 'application/json;charset=utf-8'},
  }).then(res => res.json());

  return {costs, incomes, budget};
}


export async function saveBudget(budget, token, setErrors) {
  const status = await fetch(API_URL + '/budget/add', {
    mode: 'cors',
    method: 'POST',
    body: JSON.stringify({budget, token}),
    headers: {'Content-Type': 'application/json;charset=utf-8'},
  }).then(async res => {
    if (res.status === 204) {
      return true;
    } else if (res.status === 422) {
      const data = await res.json();
      if (data.errors) {
        const {errors} = data.errors;
        setErrors(errors[0].msg);
        return false;
      }
    } else {
      setErrors(res.status);
      return false;
    }
    return true;
  });

  return status;

}

export async function editBudgetHook(budget, token, setErrors) {
  const isEdit = await fetch(API_URL + '/budget/edit', {
    mode: 'cors',
    method: 'POST',
    body: JSON.stringify({budget, token}),
    headers: {'Content-Type': 'application/json;charset=utf-8'},
  }).then(async res => {
    if (res.status === 202) {
      return true;
    } else if (res.status === 422) {
      const data = await res.json();
      if (data.errors) {
        const {errors} = data.errors;
        setErrors(errors[0].msg);
        return false;
      }
    } else {
      setErrors(res.status);
      return false;
    }
    return false;
  });

  return isEdit;
}