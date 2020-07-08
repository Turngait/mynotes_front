import {API_URL} from '../../config/api'

export function wlistOpen () {
  return (dispatch) => {
    dispatch({type: 'OPEN_ADD_MENU'})
  }
}

export function wlistClose() {
  return (dispatch) => {
    dispatch({type: 'CLOSE_ADD_MENU'})
    dispatch({
      type: 'SET_ERR_MSG_WLIST',
      payload: ''
    })
  }
}

export function wGroupOpen () {
  return (dispatch) => {
    dispatch({
      type: 'OPEN_ADD_GROUP_MENU'
    })
  }
}

export function wGroupClose () {
  return (dispatch) => {
    dispatch({
      type: 'CLOSE_ADD_GROUP_MENU'
    })
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
  return (dispatch) => {
    dispatch({
      type: 'SET_WLIST_GROUP',
      payload: val
    })
  }
}

export function setWlistItem (data) {
  return (dispatch) => {
    fetch(API_URL+'/wlist/item/add', {
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
        dispatch({
          type: 'SET_ERR_MSG_WLIST',
          payload: ''
        })
        return
      } else {
        return res.json()
      }
    })
    .then(data => {
      if(data) {
        dispatch({
          type: 'SET_ERR_MSG_WLIST',
          payload: data.errors.errors[0].msg
        })
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
        payload: {
          wlsits: data.data.wlists,
          groups: data.data.groups
        }
      })
    })
  }
}

export function deleteWlistItem (data) {
  return (dispatch) => {
    const {target, token} = data

    fetch(API_URL + '/wlist/item/' + target.dataset.itemId + '/' + token, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      mode: 'cors'
    })
    .then(res => {
      if(res.status === 204) {
        dispatch(getWlistItem(token))
      }
    })
  }
}

export function setGroupTitle (title) {
  return (dispatch) => {
    dispatch({
      type: 'SET_WLIST_GROUP_ITEM',
      payload: title
    })
  }
}

export function addGroup (data) {
  return (dispatch) => {
    fetch(API_URL + '/wlist/group/add',
      {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
      }
    )
    .then(res => {
      if(res.status === 204) {
        dispatch(wGroupClose())
        return
      } else {
        return res.json()
      }
    })
    .then(data => {
      if(data) {
        dispatch({
          type: 'SET_ERR_MSG_WLIST',
          payload: data.errors.errors[0].msg
        })
      }
    })
  }
}

export function deleteWlistGroup(data) {
  return (dispatch) => {
    const { token, target } = data;
    const id = target.dataset.itemId;
    fetch(API_URL + '/wlist/group/delete/' + id + '/' + token, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      mode: 'cors'
    })
    .then(res => {
      if (res.status === 204) {
        dispatch(getWlistItem(token))
      }
    })
  }
}