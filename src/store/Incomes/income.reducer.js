const InitialState = {
  incomes: [],
  sources: [],
  incomesByPeriod: 0
}

export default function incomeReducer(state = InitialState, action) {
  switch (action.type) {
    case 'SET_INCOMES':
      return {
        ...state,
        incomes: action.payload
      }
    case 'SET_SOURCES':
      return {
        ...state,
        sources: action.payload
      }
    case 'SET_INCOMES_BY_PERIOD':
      return {
        ...state,
        incomesByPeriod: action.payload
      }
    case 'EMPTY_INCOMES':
      return {
        ...state,
        incomes: [],
        incomesByPeriod: 0
      }
    default:
      return state
  }
}