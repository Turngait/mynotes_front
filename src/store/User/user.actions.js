import {API_URL} from '../../config/api';

export function auth(data) {
  return (dispatch) => {
    localStorage.setItem('token', data.token);
    localStorage.setItem('local', data.settings.local);
    localStorage.setItem('currency', data.settings.currency);
    dispatch({
      type: 'SET_TOKEN',
      payload: data.token
    });
    dispatch({
      type: 'SET_SETTINGS',
      payload: data.settings
    });
    dispatch({
      type: 'SET_INFO',
      email: data.email,
      name: data.name,
      balance: data.balance
    });
  }
}

export function setBudget(budget) {
  return (dispatch) => {
    dispatch({
      type: 'SET_BUDGETS',
      payload: budget.items
    });

    dispatch({
      type: 'SET_USER_BALANCE',
      payload: budget.balance
    });
  }
}

export function getSettings() {
  return (dispatch) => {
    const settings = {
      currency: localStorage.getItem('currency'),
      local: localStorage.getItem('local')
    };
    dispatch({
      type: 'SET_SETTINGS',
      payload: settings
    });
  }
}

export function getUserInfo(token) {
  return async (dispatch) => {
    const {data} = await fetch(API_URL+'/auth/user/' + token)
    .then(res => res.json())
    dispatch(setInfo(data))
  }
}

export function setInfo(user) {
  return (dispatch) => {
    dispatch({
      type: 'SET_INFO',
      email: user.email,
      name: user.name,
      balance: user.budget.balance
    });
    dispatch({
      type: 'SET_BUDGETS',
      payload: user.budget.items
    })
  }
}

export function logOut() {
  return(dispatch) => {
    localStorage.removeItem('token');
    localStorage.removeItem('currency');
    localStorage.removeItem('local');
    dispatch({type: 'REMOVE_TOKEN'});
    dispatch({type: 'REMOVE_SETTINGS'});
    dispatch({type: 'EMPTY_INCOMES'});
    dispatch({type: 'EMPTY_COSTS'});
  }
}

export function setToken(token) {
  return (dispatch) => {
    try {
      localStorage.setItem('token', token)
      dispatch({
        type: 'SET_TOKEN',
        payload: token
      })
    } catch (e) {
      console.log(e)
      return false
    }
  }

}

export function getToken() {
  return (dispatch) => {
    const token = localStorage.getItem('token')

    if (token) {
      dispatch({
        type: 'GET_TOKEN',
        payload: token
      })
    } else {
      dispatch({
        type: 'GET_TOKEN',
        payload: false
      })
    }

    return token
  }
}