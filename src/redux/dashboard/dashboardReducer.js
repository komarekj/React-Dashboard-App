import {
  DASHBOARD_SET_LOADING,
  DASHBOARD_SET_ERROR,
  DASHBOARD_SET_DATA,
} from './dashboardActionTypes';

const initalState = {
  isLoading: false,
  hasError: false,
  data: null,
};

const dashboardReducer = (state = initalState, action) => {
  const { type, payload } = action;

  switch (type) {
    case DASHBOARD_SET_LOADING: {
      const { isLoading } = payload;
      return {
        ...state,
        hasError: false,
        isLoading,
      };
    }
    case DASHBOARD_SET_ERROR: {
      const { hasError } = payload;
      return {
        ...state,
        isLoading: false,
        hasError,
      };
    }
    case DASHBOARD_SET_DATA: {
      const { data } = payload;
      return {
        ...state,
        isLoading: false,
        hasError: false,
        data,
      };
    }
    default:
      return state;
  }
};

export default dashboardReducer;
