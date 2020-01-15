import {
  AUTH_GET_INSTALL_URL,
  AUTH_SET_INSTALL_URL,
  AUTH_SET_INSTALL_ERROR,
  AUTH_SET_ERROR,
  AUTH_SET_LOADING,
  AUTH_SET_DATA,
} from './authActionTypes';

export const setAuthLoading = isLoading => ({
  type: AUTH_SET_LOADING,
  payload: { isLoading },
});

export const setAuthError = hasError => ({
  type: AUTH_SET_ERROR,
  payload: { hasError },
});

export const setAuthData = (tokenHash, tokenShop) => ({
  type: AUTH_SET_DATA,
  payload: { tokenHash, tokenShop },
});

export const getInstallUrl = shopUrl => ({
  type: AUTH_GET_INSTALL_URL,
  payload: { shopUrl },
});

export const setInstallUrl = url => ({
  type: AUTH_SET_INSTALL_URL,
  payload: { url },
});

export const setInstallError = hasError => ({
  type: AUTH_SET_INSTALL_ERROR,
  payload: { hasError },
});
