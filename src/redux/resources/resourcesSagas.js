import { call, put, all, takeEvery, select } from 'redux-saga/effects';
import api from '../../services/api';
import {
  setResourceLoading,
  setResourceError,
  setResourceData,
  setResourceSearchResults,
} from './resourcesActions';
import { RESOURCES_FETCH_PAGE, RESOURCES_SEARCH } from './resourcesActionTypes';

/**
 * Resource Page Fetch
 */
function* fetchResourcesPage({ payload }) {
  const { page = 1, resource } = payload;
  const tokenHash = yield select(state => state.auth.tokenHash);

  yield put(setResourceLoading(true, resource));

  try {
    const ordersData = yield call(
      api.resources.loadPage,
      page,
      resource,
      tokenHash
    );
    yield put(setResourceData(ordersData, resource));
  } catch (err) {
    console.log(err);
    yield put(setResourceError(true, resource));
  }
}

function* watchFetchResourcesPage() {
  yield takeEvery(RESOURCES_FETCH_PAGE, fetchResourcesPage);
}

/**
 * Search Fetch
 */
function* fetchSearchResults({ payload }) {
  const { searchValue, searchField, resource } = payload;

  yield put(setResourceLoading(true, resource));
  const tokenHash = yield select(state => state.auth.tokenHash);

  try {
    const searchResults = yield call(
      api.resources.search,
      searchValue,
      searchField,
      resource,
      tokenHash
    );
    yield put(setResourceSearchResults(searchResults.items, resource));
  } catch (err) {
    console.log(err);
    yield put(setResourceError(true, resource));
  }
}

function* watchSearch() {
  yield takeEvery(RESOURCES_SEARCH, fetchSearchResults);
}

/**
 * Root Resources Saga
 */
function* resourcesRootSaga() {
  yield all([call(watchFetchResourcesPage), call(watchSearch)]);
}

export default resourcesRootSaga;
