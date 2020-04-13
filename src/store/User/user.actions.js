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
        })
        dispatch({
          type: 'SET_INFO',
          email: data.data.email,
          name: data.data.name
        })
      } else {
        console.log('Wrong')
        dispatch(setAuthMsg('Wrong email or password!'))
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
      if(data.status === 202) {
        dispatch(setAuthMsg('Registration is complete!'))
        dispatch({
          type: 'SET_INFO',
          email: data.data.email,
          name: data.data.name
        })
      } else if (data.status === 208) {
        dispatch(setAuthMsg('User already exist!'))
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

export function setInfo(user) {
  return (dispatch) => {
    dispatch({
      type: 'SET_INFO',
      email: user.email,
      name: user.name
    })
  }
}

export function setAuthMsg(msg) {
  return (dispatch) => {
    dispatch({
      type: 'SET_MSG',
      payload: msg
    })
  }
}