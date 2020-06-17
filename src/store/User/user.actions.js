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
      return res.json()
    })
    .then(data => {
      if(data.status === 200) {
        localStorage.setItem('token', data.data.token)
        dispatch({
          type: 'SET_TOKEN',
          payload: data.data.token
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

export function logOut() {
  return(dispatch) => {
    localStorage.removeItem('token')
    dispatch({
      type: 'REMOVE_TOKEN'
    })
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

export function getUserInfo(token) {
  return (dispatch) => {
    fetch(API_URL+'/auth/user/' + token)
    .then(res => {
      return res.json();
    })
    .then(data => {
      dispatch(setInfo(data.data))
    })
  }
}

export function setInfo(user) {
  return (dispatch) => {
    dispatch({
      type: 'SET_INFO',
      email: user.email,
      name: user.name,
      balance: user.balance
    })
  }
}

export function setBalance(balance) {
  return (dispatch) => {
    dispatch({
      type: 'SET_USER_BALANCE',
      payload: Number(balance)
    })
  }
}

export function saveBalance(data) {
  return (dispatch) => {
    fetch(API_URL + '/fin/balance', {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)
    })
    .then(res => {
      if(res.status === 204) {
        dispatch(setSuccesshMsg('Balance saved'));
        setTimeout(() => dispatch(setSuccesshMsg('')), 4000);
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