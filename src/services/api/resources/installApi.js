/* eslint-disable import/prefer-default-export */
import { postRequest } from '../apiHelpers';

/**
 * Get Shopify Install URL
 */
const getInstallUrl = async shopUrl => postRequest('install/url', { shopUrl });

export { getInstallUrl };
