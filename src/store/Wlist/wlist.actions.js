import {API_URL} from '../../config/api'

export function wlistOpen () {
  return (dispatch) => {
    dispatch({type: 'OPEN_ADD_MENU'})
  }
}

export function wlistClose() {
  return (dispatch) => {
    dispatch({type: 'CLOSE_ADD_MENU'})
  }
}

export function setName(name) {
  return (dispatch) => {
    dispatch({
      type: 'SET_WLIST_NAME',
      payload: name
    })
  }
}

export function setPrice(price) {
  return (dispatch) => {
    dispatch({
      type: 'SET_WLIST_PRICE',
      payload: price
    })
  }
}

export function setLink(link) {
  return (dispatch) => {
    dispatch({
      type: 'SET_WLIST_LINK',
      payload: link
    })
  }
}

export function setText(text) {
  return (dispatch) => {
    dispatch({
      type: 'SET_WLIST_TEXT',
      payload: text
    })
  }
}

export function setPriority(val) {
  return (dispatch) => {
    dispatch({
      type: 'SET_WLIST_PRIORITY',
      payload: val
    })
  }
}

export function setGroup(val) {
  console.log(val)
  return (dispatch) => {
    dispatch({
      type: 'SET_WLIST_GROUP',
      payload: val
    })
  }
}

export function setWlistItem (data) {
  return (dispatch) => {
    console.log(data)
    fetch(API_URL+'/wlist/add', {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)
    })
    .then(res => {
      if (res.status === 204) {
        dispatch(wlistClose())
        dispatch(getWlistItem(data.token))
      }
    })
  }
}

export function getWlistItem (token) {
  return (dispatch) => {
    fetch(API_URL + '/wlist/' + token)
    .then(res => {return res.json()})
    .then(data => {
      dispatch({
        type: 'SET_WLISTS',
        payload: data.data
      })
    })
  }
}