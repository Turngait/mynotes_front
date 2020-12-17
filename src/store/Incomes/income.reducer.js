const InitialState = {
  incomes: [],
  incomePeriod: new Date().toISOString().slice(0,7),
  incomesByPeriod: 0
}

export default function incomeReducer(state = InitialState, action) {
  switch (action.type) {
    case 'SET_INCOMES':
      return {
        ...state,
        incomes: action.payload
      }
    case 'SET_INCOME_PERIOD':
      return {
        ...state,
        incomePeriod: action.payload
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
      }
    default:
      return state
  }
}