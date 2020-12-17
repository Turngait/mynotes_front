import {API_URL} from '../../config/api';

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