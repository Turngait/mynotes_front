const initialState = {
  token: false,
  email: '',
  name: ''
}

export default function userReducer (state = initialState, action) {
  switch(action.type){
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload
      }
    case 'GET_TOKEN':
      return {
        ...state,
        token: action.payload
      }
    case 'SET_INFO':
      return {
        ...state,
        email: action.email,
        name: action.name
      }
    default:
      return state
  }
}