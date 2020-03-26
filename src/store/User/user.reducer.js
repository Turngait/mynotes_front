const initialState = {
  token: false,
  email: '',
  name: '',
  authMsg: ''
}

export default function userReducer (state = initialState, action) {
  switch(action.type){
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload,
        authMsg: ''
      }
    case 'GET_TOKEN':
      return {
        ...state,
        token: action.payload
      }
    case 'REMOVE_TOKEN':
      return {
        ...state,
        token: false
      }
    case 'SET_INFO':
      return {
        ...state,
        email: action.email,
        name: action.name
      }
    case 'SET_MSG':
      return {
        ...state,
        authMsg: action.payload
      }
    default:
      return state
  }
}