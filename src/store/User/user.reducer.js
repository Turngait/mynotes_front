const initialState = {
  token: false,
  email: '',
  name: '',
  successMsg: '',
  errorMsg: '',
  balance: 0,
  settings: {
    locale: 'ru',
    currency: 'RUR'
  }
}

export default function userReducer (state = initialState, action) {
  switch(action.type){
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload,
        authMsg: ''
      }
    case 'SET_SETTINGS': 
      return {
        ...state,
        settings: action.payload
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
    case 'REMOVE_SETTINGS':
      return {
        ...state,
        settings: {
          locale: 'ru',
          currency: 'RUR'
        }
      }
    case 'SET_INFO':
      return {
        ...state,
        email: action.email,
        name: action.name,
        balance: action.balance
      }
    case 'SET_USER_BALANCE':
      return {
        ...state,
        balance: action.payload
      }
    case 'SET_SUC_MSG':
      return {
        ...state,
        successMsg: action.payload
      }
    case 'SET_ERR_MSG':
      return {
        ...state,
        errorMsg: action.payload
      }
    default:
      return state
  }
}