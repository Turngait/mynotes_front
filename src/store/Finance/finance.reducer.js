const InitialState = {
  addCostOpen: false,
  addCostGroupOpen: false,
  cost: {
    title: '',
    descrition: '',
    group: 'none',
    amount: 0,
    wlistItem: '0'
  },
  groups: [],
  groupTitle: ''
}

export default function financeReducer (state = InitialState, action) {
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
    case 'SET_COST_GROUP_TITLE':
      return {
        ...state,
        groupTitle: action.payload
      }
    case 'SET_COSTS':
      return {
        ...state,
        groups: action.groups
      }
    default:
      return state
  }
}