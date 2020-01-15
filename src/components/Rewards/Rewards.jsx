import React from 'react';
import {
  formatResourceDate,
  formatUSD,
} from '../../helpers/resourceFormatHelpers';
import Resources from '../Resources/Resources';

const RESOURCE = 'rewards';

const Orders = () => {
  const columns = [
    ['Date', 'created', formatResourceDate],
    ['Order ID', 'orderId'],
    ['Customer ID', 'customerId'],
    ['Order Value', 'orderValue', formatUSD],
    ['Reward Points', 'rewardPoints'],
  ];

  return (
    <Resources
      title="Rewards"
      allowSearch={false}
      resource={RESOURCE}
      columns={columns}
    />
  );
};

export default Orders;
