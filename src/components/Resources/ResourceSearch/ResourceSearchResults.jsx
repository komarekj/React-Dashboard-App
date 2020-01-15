import React from 'react';
import { Paper } from '@material-ui/core';
import ResourceListingTable from '../ResourceListing/ResourceListingTable';
import ResourceListingError from '../ResourceListing/ResourceListingError';
import ResourceListingSkeleton from '../ResourceListing/ResourceListingSkeleton';
import { useResourceSearch, useResourceContext } from '../resourceHooks';

const ResourceSearchResults = () => {
  const { results, isLoading, hasError } = useResourceSearch();
  const { columns } = useResourceContext();

  return (
    <>
      {isLoading && <ResourceListingSkeleton />}
      {hasError && <ResourceListingError />}

      {!isLoading && !hasError && (
        <Paper>
          <ResourceListingTable items={results} columns={columns} />
        </Paper>
      )}
    </>
  );
};

export default ResourceSearchResults;
