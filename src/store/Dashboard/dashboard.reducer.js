const initialState = {
  wlistOpen: true,
  financeOpen: false,
  profileOpen: false
}

export default function dashboardReducer(state = initialState, action) {
  switch(action.type){
    case 'OPEN_WLIST':
      return {
        ...state,
        wlistOpen: true,
        financeOpen: false,
        profileOpen: false
      }
    case 'OPEN_FINANCE':
      return {
        ...state,
        wlistOpen: false,
        financeOpen: true,
        profileOpen: false
      }
    case 'OPEN_PROFILE':
      return {
        ...state,
        wlistOpen: false,
        financeOpen: false,
        profileOpen: true
      }
    default:
      return state
  }
}