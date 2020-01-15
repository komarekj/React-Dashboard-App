import React from 'react';
import {
  formatResourceDate,
  showResourceActive,
} from '../../helpers/resourceFormatHelpers';
import Resources from '../Resources/Resources';

const RESOURCE = 'members';
const SEARCH_FIELD = 'customerId';

const Membership = () => {
  const columns = [
    ['Customer ID', 'customerId'],
    ['Tier', 'tier'],
    ['Active', 'expired', expired => showResourceActive(!expired)],
    ['Expiration Date', 'expireDate', formatResourceDate],
  ];

  return (
    <Resources
      title="Membership"
      resource={RESOURCE}
      searchField={SEARCH_FIELD}
      columns={columns}
    />
  );
};

export default Membership;
