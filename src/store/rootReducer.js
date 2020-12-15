import { combineReducers } from 'redux';
import userReducer from './User/user.reducer';
import cotstsReducer from './Costs/costs.reducer';
import incomeReducer from './Incomes/income.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  costs: cotstsReducer,
  income: incomeReducer,
})
