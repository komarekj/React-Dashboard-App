import {
  DASHBOARD_FETCH_DATA,
  DASHBOARD_SET_LOADING,
  DASHBOARD_SET_ERROR,
  DASHBOARD_SET_DATA,
} from './dashboardActionTypes';

export const fetchDashboardData = () => ({
  type: DASHBOARD_FETCH_DATA,
});

export const setDashboardLoading = isLoading => ({
  type: DASHBOARD_SET_LOADING,
  payload: { isLoading },
});

export const setDashboardError = hasError => ({
  type: DASHBOARD_SET_ERROR,
  payload: { hasError },
});

export const setDashboardData = data => ({
  type: DASHBOARD_SET_DATA,
  payload: { data },
});
