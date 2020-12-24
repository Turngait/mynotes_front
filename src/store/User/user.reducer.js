const initialState = {
  token: false,
  email: '',
  name: '',
  balance: 0,
  settings: {
    locale: 'ru',
    currency: 'Руб'
  },
  budgets: [],
  month: new Date().toISOString().slice(0,7)
}

export default function userReducer (state = initialState, action) {
  switch(action.type){
    case 'SET_MONTH':
      return {
        ...state,
        month: action.payload
      }
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
    case 'SET_BUDGETS':
      return {
        ...state,
        budgets: action.payload
      }
    case 'SET_USER_BALANCE':
      return {
        ...state,
        balance: action.payload
      }
    case 'SET_USER_OLD_PASS':
      return {
        ...state,
        pass: {
          ...state.pass,
          old: action.payload
        }
      }
    case 'SET_USER_NEW_PASS':
      return {
        ...state,
        pass: {
          ...state.pass,
          new: action.payload
        }
      }
    default:
      return state
  }
}