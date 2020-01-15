import { combineReducers } from 'redux';
import dashboardReducer from './dashboard/dashboardReducer';
import resourcesReducer from './resources/resourcesReducer';
import authReducer from './auth/authReducer';

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  resources: resourcesReducer,
  auth: authReducer,
});

export default rootReducer;
