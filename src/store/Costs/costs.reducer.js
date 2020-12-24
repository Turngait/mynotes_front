const InitialState = {
  costs: [],
  groups: [],
  costsByPeriod: 0,
  isCostsFiltered: false
}

export default function costsReducer (state = InitialState, action) {
  switch (action.type) {
    case 'SET_COSTS':
      return {
        ...state,
        groups: action.groups,
        costs: action.costs
      }
    case 'SET_COSTS_BY_PERIOD':
      return {
        ...state,
        costsByPeriod: action.payload
      }
    case 'SET_ISFILTERED':
      return {
        ...state,
        isCostsFiltered: action.payload
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