import {API_URL} from '../../config/api';

export function getIncomes(token) {
  return (dispatch) => {
    const period = new Date().toISOString().slice(0,7);
    fetch(API_URL + '/fin/income/get/' + period + '/' + token)
    .then(res => {return res.json()})
    .then(data => {
      if(data.status === 200) {
        dispatch(setIncomes(data.data.incomes));
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