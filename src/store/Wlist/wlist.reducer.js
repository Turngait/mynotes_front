const initialState = {
  wlistOpen: true
}

export default function wlistReducer(state = initialState, action) {
  switch(action.type) {
    case 'OPEN_ADD_MENU':
      return {
        ...state,
        wlistOpen: true
      }
    case 'CLOSE_ADD_MENU':
      return {
        ...state,
        wlistOpen: false
      }
    default: 
    return state
  }
} 