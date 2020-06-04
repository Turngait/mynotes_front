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
        dispatch({type: 'SET_INCOMES', payload: data.data.incomes})
      }
    })
  }
}

export function addIncomeItem(data) {
  return (dispatch) => {

    fetch(API_URL + '/fin/income/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      mode: 'cors',
      body: JSON.stringify(data)
    })
    .then(res => {
      if(res.status === 204) {
        dispatch({type: 'CLOSE_ADD_INCOME'})
      }
    })
  }
}