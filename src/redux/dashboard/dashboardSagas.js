import { call, put, takeLatest, all, select } from 'redux-saga/effects';
import api from '../../services/api';
import {
  setDashboardLoading,
  setDashboardError,
  setDashboardData,
} from './dashboardActions';
import { DASHBOARD_FETCH_DATA } from './dashboardActionTypes';

/**
 * Dashboard data fetch
 */
function* fetchDashboard() {
  yield put(setDashboardLoading(true));

  const tokenHash = yield select(state => state.auth.tokenHash);

  try {
    const data = yield call(api.dashboard.load, tokenHash);
    yield put(setDashboardData(data));
  } catch (err) {
    console.log(err);
    yield put(setDashboardError(true));
  }
}

function* watchDashboardFetch() {
  yield takeLatest(DASHBOARD_FETCH_DATA, fetchDashboard);
}

/**
 * Dashboard root saga
 */
function* dashboardRootSaga() {
  yield all([call(watchDashboardFetch)]);
}

export default dashboardRootSaga;
