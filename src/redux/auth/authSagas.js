import { takeLatest, all, put, call } from 'redux-saga/effects';
import { setAuthLoading, setInstallError, setInstallUrl } from './authActions';
import { AUTH_GET_INSTALL_URL } from './authActionTypes';
import api from '../../services/api';

/**
 * Get Install URL
 */
function* getInstallUrl({ payload }) {
  const { shopUrl } = payload;

  yield put(setAuthLoading(true));

  try {
    const response = yield call(api.install.getInstallUrl, shopUrl);
    yield put(setInstallUrl(response.url));
  } catch (err) {
    console.log(err);
    yield put(setInstallError(true));
  }
}

function* watchGetInstallUrl() {
  yield takeLatest(AUTH_GET_INSTALL_URL, getInstallUrl);
}

/**
 * Root Saga
 */
function* authRootSaga() {
  yield all([call(watchGetInstallUrl)]);
}

export default authRootSaga;
