import React from 'react';
import {
  formatResourceDate,
  showResourceStatus,
} from '../../helpers/resourceFormatHelpers';
import Resources from '../Resources/Resources';

const RESOURCE = 'orders';
const SEARCH_FIELD = 'name';

const Orders = () => {
  const columns = [
    ['Name', 'name'],
    ['Date', 'added', formatResourceDate],
    ['Spreadsheet', 'spreadsheet', showResourceStatus],
    ['Invoice', 'invoice', showResourceStatus],
  ];

  return (
    <Resources
      title="Orders"
      resource={RESOURCE}
      searchField={SEARCH_FIELD}
      columns={columns}
    />
  );
};

export default Orders;
