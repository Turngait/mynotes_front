// import {API_URL} from '../../config/api';

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

export function addIncomeItem(data) {
  return (dispatch) => {
    console.log(data)
  }
}