import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import ResourceContext from './context/ResourceContext';
import { PageTitle } from '../Common';
import ResourceListing from './ResourceListing/ResourceListing';
import { ResourceSearchForm, ResourceSearchResults } from './ResourceSearch';

const Resources = ({ title, allowSearch = true, ...otherProps }) => {
  const { path } = useRouteMatch();

  const contextValue = {
    ...otherProps,
    path,
  };

  return (
    <ResourceContext.Provider value={contextValue}>
      <PageTitle>{title}</PageTitle>

      {allowSearch && <ResourceSearchForm />}

      <Switch>
        <Route path={`${path}/page/:page`}>
          <ResourceListing />
        </Route>
        {allowSearch && (
          <Route path={`${path}/search/:searchValue`}>
            <ResourceSearchResults />
          </Route>
        )}
        <Route path="*">
          <Redirect to={`${path}/page/0`} />
        </Route>
      </Switch>
    </ResourceContext.Provider>
  );
};

Resources.propTypes = {
  title: PropTypes.string.isRequired,
  allowSearch: PropTypes.bool,
};

export default Resources;
