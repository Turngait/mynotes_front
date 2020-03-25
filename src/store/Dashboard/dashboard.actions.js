export function openWlist () {
  return (disptch) => {
    disptch({type: 'OPEN_WLIST'})
  }
}

export function openFinance () {
  return (disptch) => {
    disptch({type: 'OPEN_FINANCE'})
  }
}

export function openProfile () {
  return (disptch) => {
    disptch({type: 'OPEN_PROFILE'})
  }
}