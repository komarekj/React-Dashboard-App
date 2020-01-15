import React from 'react';
import PropTypes from 'prop-types';
import DashboardCard from './DashboardCard';
import DashboardCardTable from './DashboardCardTable';
import { formatUSD } from '../../../helpers/resourceFormatHelpers';

const DashboardLastRewards = ({ data }) => {
  const columns = [
    ['Order ID', 'orderId'],
    ['Order Value', 'orderValue', formatUSD],
    ['Reward Points', 'rewardPoints'],
  ];

  return (
    <DashboardCard title="Latest Rewards">
      <DashboardCardTable items={data} columns={columns} />
    </DashboardCard>
  );
};

DashboardLastRewards.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default DashboardLastRewards;
