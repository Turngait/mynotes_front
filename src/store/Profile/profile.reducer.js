const initialState = {
  isMyDataOpen: true,
  isMyGroupsOpen: false,
  isSettingsOpen: false
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
    case 'CHANGE_IS_OPEN_SETTINGS':
      return {
        ...state,
        isSettingsOpen: action.payload
      }
    default:
      return state
  }
}