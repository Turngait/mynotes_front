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