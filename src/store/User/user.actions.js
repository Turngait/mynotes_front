import {API_URL} from '../../config/api'

export function signIn(login, pass) {
  return (dispatch) => {
    const auth = '/auth/signin'
    const body = {
      email: login,
      pass: pass
    }
  
    fetch(API_URL+auth, {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(body)
    })
    .then(res => {
      return res.json();
    })
    .then(data => {
      if(data.status === 200) {
        localStorage.setItem('token', data.data.token);
        localStorage.setItem('local', data.data.settings.local);
        localStorage.setItem('currency', data.data.settings.currency);
        dispatch({
          type: 'SET_TOKEN',
          payload: data.data.token
        });
        dispatch({
          type: 'SET_SETTINGS',
          payload: data.data.settings
        });
        dispatch({
          type: 'SET_INFO',
          email: data.data.email,
          name: data.data.name,
          balance: data.data.balance
        });
        dispatch(setSuccesshMsg(''));
        dispatch(setErrorhMsg(''));
      } else {
        dispatch(setErrorhMsg('Wrong email or password!'));
        setTimeout(() => dispatch(setErrorhMsg(false)), 4000);
      }
    })
  }
}

export function signUp (email, name, pass) {
  return (dispatch) => {
    const auth = '/auth/signup'
    const body = {
      email: email,
      pass: pass,
      name: name
    }
    fetch(API_URL+auth, {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(body)
    })
    .then(res => {
      return res.json()
    })
    .then(data => {
      if (data.errors) {
        dispatch(setErrorhMsg(data.errors.errors[0].msg))
      }
      if(data.status === 202) {
        dispatch(setSuccesshMsg('Registration is complete!'));
        dispatch({
          type: 'SET_INFO',
          email: data.data.email,
          name: data.data.name
        });
        setTimeout(() => dispatch(setSuccesshMsg('')), 3000);
      } else if (data.status === 208) {
        dispatch(setErrorhMsg('User already exist!'));
        setTimeout(() => dispatch(setErrorhMsg('')), 3000);
      } else {
        console.log('Wrong')
      }
    })
  }
}

export function getFinData(token) {
  return async (dispatch) => {
    const period = new Date().toISOString().slice(0,7);
    const {costs, incomes, budget} = await fetch(API_URL + '/fin/getfindata', {
      mode: 'cors',
      method: 'POST',
      body: JSON.stringify({token, period}),
      headers: {'Content-Type': 'application/json;charset=utf-8'},
    }).then(res => res.json());
        
    dispatch({
      type: 'SET_COSTS_BY_PERIOD',
      payload: costs.costs.spentByPeriod
    });
    dispatch({type: 'SET_INCOMES', payload: incomes});
    dispatch({
      type: 'SET_COSTS',
      groups: costs.groups,
      costs: costs.costs
    });

    dispatch({
      type: 'SET_BUDGETS',
      payload: budget.items
    })
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
  return (dispatch) => {
    fetch(API_URL+'/auth/user/' + token)
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data.data)
      if (data.status === 200) {
        dispatch(setInfo(data.data))
      };
    })
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
    dispatch({type: 'EMPTY_WLISTS'});
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

export function setUserName(name) {
  return (dispatch) => {
    dispatch({
      type: 'SET_USER_NAME',
      payload: name
    })
  }
}

export function setUserEmail(email) {
  return (dispatch) => {
    dispatch({
      type: 'SET_USER_EMAIL',
      payload: email
    })
  }
}

export function saveNewUserData(data) {
  return (dispatch) => {
    fetch(API_URL + '/auth/user/setdata', {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)
    })
    .then(res => {
      if(res.status === 204) {
        dispatch(setSuccesshMsg('Data saved!'));
        setTimeout(() => dispatch(setSuccesshMsg('')), 4000);
      } else if(res.status === 403) {
        dispatch(setErrorhMsg('Access denied'));
        setTimeout(() => dispatch(setErrorhMsg('')), 4000);
      } else {
        dispatch(setErrorhMsg('Server error'));
        setTimeout(() => dispatch(setErrorhMsg('')), 4000);
      }
    })
  }
}

export function setPasswords(data) {
  return (dispatch) => {
    if(data.type === 'old') {
      dispatch({type: 'SET_USER_OLD_PASS', payload: data.pass});
    } else if(data.type === 'new') {
      dispatch({type: 'SET_USER_NEW_PASS', payload: data.pass});
    }
  }
}

export function setNewPassword(data) {
  return (dispatch) => {
    console.log(data)
  }
}
export function changePassword(data) {
  return (dispatch) => {
    fetch(API_URL + '/auth/user/changepassword',{
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)
    })
    .then(res => {
      if(res.status === 204) {
        dispatch(setSuccesshMsg('Password saved!'));
        setTimeout(() => dispatch(setSuccesshMsg('')), 4000);
      } else if(res.status === 403) {
        dispatch(setErrorhMsg('Old password incorrect'));
        setTimeout(() => dispatch(setErrorhMsg('')), 4000);
      } else {
        dispatch(setErrorhMsg('Server error'));
        setTimeout(() => dispatch(setErrorhMsg('')), 4000);
      }
    })
  }
}

export function setSuccesshMsg(msg) {
  return (dispatch) => {
    dispatch({
      type: 'SET_SUC_MSG',
      payload: msg
    })
  }
}

export function setErrorhMsg(msg) {
  return (dispatch) => {
    dispatch({
      type: 'SET_ERR_MSG',
      payload: msg
    })
  }
}