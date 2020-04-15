const initialState = {
  wlistOpen: false,
  wlistGroupOpen: false,
  wlistName: '',
  wlistPrice: '',
  wlistLink: '',
  wlistText: '',
  wlistGroup: 'MustHave',
  wlistPriority: 4,
  wlistGroupTitle: '',
  wlist:[],
  errorMsg: ''
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
    case 'OPEN_ADD_GROUP_MENU':
      return {
        ...state,
        wlistGroupOpen: true
      }
    case 'CLOSE_ADD_GROUP_MENU':
      return {
        ...state,
        wlistGroupOpen: false
      }
    case 'SET_WLIST_NAME':
      return {
        ...state,
        wlistName: action.payload
      }
    case 'SET_WLIST_PRICE':
      return {
        ...state,
        wlistPrice: action.payload
      }
    case 'SET_WLIST_LINK':
      return {
        ...state,
        wlistLink: action.payload
      }
    case 'SET_WLIST_TEXT':
      return {
        ...state,
        wlistText: action.payload
      }
    case 'SET_WLIST_PRIORITY':
      return {
        ...state,
        wlistPriority: action.payload
      }
    case 'SET_WLIST_GROUP': 
      return {
        ...state,
        wlistGroup: action.payload
      }
    case 'SET_WLIST_GROUP_ITEM':
      return {
        ...state,
        wlistGroupTitle: action.payload
      }
    case 'SET_WLISTS':
      return {
        ...state,
        wlist: action.payload
      }
    case 'SET_ERR_MSG_WLIST':
      return {
        ...state,
        errorMsg: action.payload
      }
    default: 
    return state
  }
} 