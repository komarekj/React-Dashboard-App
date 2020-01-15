import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ShopifyAppSkeleton from './ShopifyAppSkeleton';
import ShopifyError from './ShopifyAppError';
import useShopifyAuth from './useShopifyAuth';

const ShopifyApp = ({ children }) => {
  const { isAuth, authError, installError, installUrl } = useShopifyAuth();

  /**
   * Redirect when we have install URL
   */
  useEffect(() => {
    if (installUrl) {
      window.top.location.href = installUrl;
    }
  }, [installUrl]);

  /**
   * Render
   */
  if (authError || installError) {
    return <ShopifyError />;
  }

  if (isAuth) {
    return children;
  }

  return <ShopifyAppSkeleton />;
};

ShopifyApp.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ShopifyApp;
