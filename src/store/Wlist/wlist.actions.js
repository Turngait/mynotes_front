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
