export function openMyData () {
  return (disptch) => {
    disptch({type: 'OPEN_PROFILE_DATA'})
  }
}

export function openMyGroups () {
  return (disptch) => {
    disptch({type: 'OPEN_PROFILE_GROUPS'})
  }
}

export function toggleSettingsWindow (data) {
  return (disptch) => {
    disptch({type: 'CHANGE_IS_OPEN_SETTINGS', payload: data})
  }
}

