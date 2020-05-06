const initialState = {
  isMyDataOpen: true,
  isMyGroupsOpen: false
}

export default function profileReducer (state = initialState, action) {
  switch(action.type){
    case 'OPEN_PROFILE_DATA':
      return {
        ...state,
        isMyDataOpen: true,
        isMyGroupsOpen: false
      }
    case 'OPEN_PROFILE_GROUPS':
      return {
        ...state,
        isMyDataOpen: false,
        isMyGroupsOpen: true
      }
    default:
      return state
  }
}