import { all, call } from 'redux-saga/effects';
import dashboardRootSaga from './dashboard/dashboardSagas';
import resourcesRootSaga from './resources/resourcesSagas';
import authRootSaga from './auth/authSagas';

function* rootSaga() {
  yield all([
    call(dashboardRootSaga),
    call(resourcesRootSaga),
    call(authRootSaga),
  ]);
}

export default rootSaga;
