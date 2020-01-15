import {
  RESOURCES_FETCH_PAGE,
  RESOURCES_SET_LOADING,
  RESOURCES_SET_ERROR,
  RESOURCES_SET_DATA,
  RESOURCES_SEARCH,
  RESOURCES_SET_SEARCH_RESULTS,
} from './resourcesActionTypes';

export const fetchResourcePage = (page, resource) => ({
  type: RESOURCES_FETCH_PAGE,
  payload: { page, resource },
});

export const setResourceLoading = (isLoading, resource) => ({
  type: RESOURCES_SET_LOADING,
  payload: { isLoading, resource },
});

export const setResourceError = (hasError, resource) => ({
  type: RESOURCES_SET_ERROR,
  payload: { hasError, resource },
});

export const setResourceData = (data, resource) => ({
  type: RESOURCES_SET_DATA,
  payload: { ...data, resource },
});

export const resourceSearch = (searchValue, searchField, resource) => ({
  type: RESOURCES_SEARCH,
  payload: { searchValue, searchField, resource },
});

export const setResourceSearchResults = (results, resource) => ({
  type: RESOURCES_SET_SEARCH_RESULTS,
  payload: { results, resource },
});
