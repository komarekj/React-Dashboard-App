import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { TablePagination, Paper } from '@material-ui/core';
import ResourceListingTable from './ResourceListingTable';
import ResourceListingError from './ResourceListingError';
import ResourceListingSkeleton from './ResourceListingSkeleton';
import { useResourceContext, useResourceListing } from '../resourceHooks';

const ReasourceListing = () => {
  // Hooks
  const history = useHistory();
  const { page } = useParams();
  const { path, columns } = useResourceContext();

  const {
    items,
    isLoading,
    hasError,
    itemCount,
    rowsPerPage,
  } = useResourceListing();

  // Handlers
  const handleChangePage = (event, newPage) => {
    history.push(`${path}/page/${newPage}`);
  };

  return (
    <>
      {isLoading && <ResourceListingSkeleton />}
      {hasError && <ResourceListingError />}

      {!isLoading && !hasError && (
        <Paper>
          <ResourceListingTable items={items} columns={columns} />
          <TablePagination
            component="div"
            rowsPerPageOptions={[rowsPerPage]}
            rowsPerPage={rowsPerPage}
            count={itemCount}
            page={+page}
            onChangePage={handleChangePage}
          />
        </Paper>
      )}
    </>
  );
};

export default ReasourceListing;
