import { combineReducers } from 'redux'
import userReducer from './User/user.reducer'
import dashboardReducer from './Dashboard/dashboard.reducer'
import wlistReducer from './Wlist/wlist.reducer'
import financeReducer from './Finance/finance.reducer'

export const rootReducer = combineReducers({
  user: userReducer,
  dashboard: dashboardReducer,
  wlist: wlistReducer,
  finance: financeReducer
})