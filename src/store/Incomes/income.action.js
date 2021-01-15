import {API_URL} from '../../config/api';

export function getIncomes(token) {
  return (dispatch) => {
    const period = new Date().toISOString().slice(0,7);
    fetch(API_URL + '/fin/income/get/' + period + '/' + token)
    .then(res => {return res.json()})
    .then(data => {
      if(data.status === 200) {
        dispatch({type: 'SET_INCOMES', payload: data.data.incomes.incomes});

        if (data.data.incomes.length > 0) {
          dispatch({type: 'SET_INCOMES_BY_PERIOD', payload: data.data.incomes[0].gainByPeriod});
        }
      }
    })
  }
}

export function setIncomes(data) {
  return (dispatch) => {
    const {incomes, sources} = data;
    let gainByPeriod = 0;
    if(incomes.length > 0) gainByPeriod = incomes[incomes.length - 1].gainByPeriod;
    dispatch({type: 'SET_INCOMES_BY_PERIOD', payload: gainByPeriod});
    dispatch({type: 'SET_INCOMES', payload: incomes});
    dispatch({type: 'SET_SOURCES', payload: sources});
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

export function deleteSource(data) {
  return (dispatch) => {
    const { token, target } = data;
    const id = target.dataset.itemId;
    console.log(id)
    fetch(API_URL + '/fin/income/deletesource/' + id + '/' + token, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      mode: 'cors'
    })
    .then(res => {
      if (res.status === 204) {
        dispatch(getIncomes(token))
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
        type: 'SET_MONTH',
        payload: period
      })
    })
  }
}