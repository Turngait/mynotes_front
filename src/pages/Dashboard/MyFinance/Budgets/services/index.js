import {API_URL} from 'config/api';

export async function saveBudget(budget, token, setBudget, setErrors) {
  const status = await fetch(API_URL + '/budget/add', {
    mode: 'cors',
    method: 'POST',
    body: JSON.stringify({budget, token}),
    headers: {'Content-Type': 'application/json;charset=utf-8'},
  }).then(async res => {
    if (res.status === 201) {
      const data = await res.json();
      const {budgets} = data.data;
      setBudget(budgets);
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

export async function editBudgetService(budget, token, setBudget, setErrors) {
  const isEdit = await fetch(API_URL + '/budget/edit', {
    mode: 'cors',
    method: 'POST',
    body: JSON.stringify({budget, token}),
    headers: {'Content-Type': 'application/json;charset=utf-8'},
  }).then(async res => {
    if (res.status === 202) {
      const data = await res.json();
      const {budgets} = data.data;
      setBudget(budgets);

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

export async function deleteBudgetService(id_budget, token, setBudget, setErrors) {
  await fetch(API_URL + '/budget/delete', {
    mode: 'cors',
    method: 'POST',
    body: JSON.stringify({id_budget, token}),
    headers: {'Content-Type': 'application/json;charset=utf-8'},
  }).then(async res => {
    if (res.status === 202) {
      const data = await res.json();
      const {budgets} = data.data;
      setBudget(budgets);

      return true;
    } else if (res.status === 422) {
      const data = await res.json();
      if (data.error) {
        setErrors(data.error);
      } else {
        setErrors('Что то пошло не так. Попробуйте позже.');
      }
      setTimeout(() => setErrors(''), 4000);
      return false;
    } else {
      setErrors(res.status);
      return false;
    }
  });
}