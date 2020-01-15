import { apiCall } from '../apiHelpers';

export const load = async tokenHash =>
  await apiCall(`dashboard/load`, { tokenHash });
