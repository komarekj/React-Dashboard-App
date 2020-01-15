import { apiCall } from '../apiHelpers';

export const loadPage = async (page, resource, tokenHash) =>
  await apiCall(`${resource}/list`, { page, tokenHash });

export const search = async (searchValue, searchField, resource, tokenHash) =>
  await apiCall(`${resource}/search`, { searchValue, searchField, tokenHash });
