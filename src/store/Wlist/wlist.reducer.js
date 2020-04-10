const initialState = {
  wlistOpen: false,
  wlistName: '',
  wlistPrice: '',
  wlistLink: '',
  wlistText: '',
  wlistGroup: 'MustHave',
  wlistPriority: 4,
  wlist:[]
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
    case 'SET_WLISTS':
      return {
        ...state,
        wlist: action.payload
      }
    default: 
    return state
  }
} 