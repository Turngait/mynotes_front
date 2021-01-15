const InitialState = {
  costs: [],
  groups: [],
  costsByPeriod: 0,
}

export default function costsReducer (state = InitialState, action) {
  switch (action.type) {
    case 'SET_COSTS':
      return {
        ...state,
        groups: action.groups,
        costs: action.costs
      }
    case 'SET_GROUPS':
      return {
        ...state,
        groups: action.payload
      }
    case 'SET_COSTS_BY_PERIOD':
      return {
        ...state,
        costsByPeriod: action.payload
      }
    case 'EMPTY_COSTS':
      return {
        ...state,
        costs: [],
        groups: [],
        costsByPeriod: 0
      }
    default:
      return state
  }
}