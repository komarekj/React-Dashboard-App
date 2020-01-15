import {
  AUTH_SET_INSTALL_URL,
  AUTH_SET_INSTALL_ERROR,
  AUTH_SET_ERROR,
  AUTH_SET_LOADING,
  AUTH_SET_DATA,
} from './authActionTypes';

const initialState = {
  installUrl: null,
  tokenHash: null,
  tokenShop: null,
  isLoading: false,
  installError: false,
  authError: false,
  isFinished: false,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case AUTH_SET_INSTALL_URL: {
      const { url } = payload;
      return {
        ...state,
        installUrl: url,
        isLoading: false,
        authError: false,
      };
    }
    case AUTH_SET_LOADING: {
      const { isLoading } = payload;
      return {
        ...state,
        isLoading,
      };
    }
    case AUTH_SET_INSTALL_ERROR: {
      const { hasError } = payload;
      return {
        ...state,
        installError: hasError,
        isLoading: false,
      };
    }
    case AUTH_SET_ERROR: {
      const { hasError } = payload;
      return {
        ...state,
        authError: hasError,
        isLoading: false,
      };
    }
    case AUTH_SET_DATA: {
      const { tokenHash, tokenShop } = payload;
      return {
        ...state,
        tokenHash,
        tokenShop,
        isFinished: true,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
