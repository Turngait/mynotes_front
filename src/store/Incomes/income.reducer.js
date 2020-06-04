const InitialState = {
  isIncomesOpen: false,
  addIncomeOpen: false,
  incomes: [],
  income: {
    title: '',
    descrition: '',
    amount: '',
    date: new Date().toISOString().slice(0,10)
  },
  incomePeriod: new Date().toISOString().slice(0,7)
}

export default function incomeReducer(state = InitialState, action) {
  switch (action.type) {
    case 'SET_INCOMES':
      return {
        ...state,
        incomes: action.payload
      }
    case 'OPEN_ADD_INCOME':
      return {
        ...state,
        addIncomeOpen: true
      }
    case 'CLOSE_ADD_INCOME':
      return {
        ...state,
        addIncomeOpen: false
      }
    case 'SET_INCOME_TITLE':
      return {
        ...state,
        income: {
          ...state.income,
          title: action.payload
        }
      }
    case 'SET_INCOME_DESCRIPTION':
      return {
        ...state,
        income: {
          ...state.income,
          descrition: action.payload
        }
      }
    case 'SET_INCOME_AMOUNT':
      return {
        ...state,
        income: {
          ...state.income,
          amount: action.payload
        }
      }
    case 'SET_INCOME_DATE':
      return {
        ...state,
        income: {
          ...state.income,
          date: action.payload
        }
      }
    default:
      return state
  }
}