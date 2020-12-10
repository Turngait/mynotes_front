import { combineReducers } from 'redux';
import userReducer from './User/user.reducer';
import dashboardReducer from './Dashboard/dashboard.reducer';
import financeReducer from './Finance/finance.reducer';
import cotstsReducer from './Costs/costs.reducer';
import incomeReducer from './Incomes/income.reducer';
import profileReduce from './Profile/profile.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  dashboard: dashboardReducer,
  finance: financeReducer,
  costs: cotstsReducer,
  income: incomeReducer,
  profile: profileReduce
})