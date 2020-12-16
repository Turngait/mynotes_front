const InitialState = {
  costPeriod: new Date().toISOString().slice(0,7),
  cost: {
    title: '',
    descrition: '',
    group: 'none',
    amount: 0,
    date: new Date().toISOString().slice(0,10)
  },
  costs: [],
  groups: [],
  costsByPeriod: 0,
  groupTitle: '',
  addGroupError: '',
  addCostError: '',
  isCostsFiltered: false
}

export default function costsReducer (state = InitialState, action) {
  switch (action.type) {
    case 'SET_COST_TITLE':
      return {
        ...state,
        cost: {
          ...state.cost,
          title: action.payload
        }
      }
    case 'SET_COST_AMOUNT':
      return {
        ...state,
        cost: {
          ...state.cost,
          amount: action.payload
        }
      }
    case 'SET_COST_DESCRIPTION':
      return {
        ...state,
        cost: {
          ...state.cost,
          descrition: action.payload
        }
      }
    case 'SET_COST_GROUP':
      return {
        ...state,
        cost: {
          ...state.cost,
          group: action.payload
        }
      }
    case 'SET_COST_DATE':
      return {
        ...state,
        cost: {
          ...state.cost,
          date: action.payload
        }
      }
    case 'SET_COST_GROUP_TITLE':
      return {
        ...state,
        groupTitle: action.payload
      }
    case 'SET_COSTS':
      return {
        ...state,
        groups: action.groups,
        costs: action.costs
      }
    case 'SET_ADD_GROUP_ERROR':
      return {
        ...state,
        addGroupError: action.payload,
      }
    case 'SET_ADD_COST_ERROR':
      return {
        ...state,
        addCostError: action.payload,
      }
    case 'SET_COST_PERIOD':
      return {
        ...state,
        costPeriod: action.payload,
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
      }
    default:
      return state
  }
}