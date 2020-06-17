const InitialState = {
  addCostOpen: false,
  addCostGroupOpen: false,
  isCostOpen: true,
  isIncomesOpen: false,
  costPeriod: new Date().toISOString().slice(0,7),
  cost: {
    title: '',
    descrition: '',
    group: 'none',
    amount: 0,
    wlistItem: '0',
    date: new Date().toISOString().slice(0,10)
  },
  costs: [],
  groups: [],
  costsByPeriod: 0,
  groupTitle: '',
  addGroupError: '',
  addCostError: '',
  incomes: [],
  income: {
    title: '',
    descrition: '',
    amount: '',
    date: new Date().toISOString().slice(0,10)
  },
  isCostsFiltered: false
}

export default function costsReducer (state = InitialState, action) {
  switch (action.type) {
    case 'OPEN_ADD_COST':
      return {
        ...state,
        addCostOpen: true
      }
    case 'CLOSE_ADD_COST':
      return {
        ...state,
        addCostOpen: false
      }
    case 'OPEN_ADD_COST_GROUP':
      return {
        ...state,
        addCostGroupOpen: true
      }
    case 'CLOSE_ADD_COST_GROUP':
      return {
        ...state,
        addCostGroupOpen: false
      }
    case 'OPEN_COSTS_SUBSCREEN':
      return {
        ...state,
        isCostOpen: true,
        isIncomesOpen: false
      }
    case 'OPEN_INCOMES_SUBSCREEN':
      return {
        ...state,
        isCostOpen: false,
        isIncomesOpen: true
      }
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
    case 'SET_COST_WLIST_ITEM':
      return {
        ...state,
        cost: {
          ...state.cost,
          wlistItem: action.payload
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
    default:
      return state
  }
}