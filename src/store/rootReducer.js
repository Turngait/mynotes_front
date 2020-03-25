import { combineReducers } from 'redux'
import userReducer from './User/user.reducer'
import dashboardReducer from './Dashboard/dashboard.reducer'

export const rootReducer = combineReducers({
  user: userReducer,
  dashboard: dashboardReducer
})