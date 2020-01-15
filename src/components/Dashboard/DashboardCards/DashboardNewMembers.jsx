import React from 'react';
import PropTypes from 'prop-types';
import DashboardCard from './DashboardCard';
import DashboardCardTable from './DashboardCardTable';
import { formatResourceDate } from '../../../helpers/resourceFormatHelpers';

const DashboardNewMembers = ({ data }) => {
  const columns = [
    ['Customer ID', 'customerId'],
    ['Tier', 'tier'],
    [
      'Expiration Date',
      'expireDate',
      date => formatResourceDate(date, 'MMM D, YYYY'),
    ],
  ];

  return (
    <DashboardCard title="Newest Members">
      <DashboardCardTable items={data} columns={columns} />
    </DashboardCard>
  );
};

DashboardNewMembers.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default DashboardNewMembers;
