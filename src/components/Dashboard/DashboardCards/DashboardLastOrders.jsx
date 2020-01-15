import React from 'react';
import PropTypes from 'prop-types';
import DashboardCard from './DashboardCard';
import DashboardCardTable from './DashboardCardTable';
import { showResourceStatus } from '../../../helpers/resourceFormatHelpers';

const DashboardLastOrders = ({ data }) => {
  const columns = [
    ['Name', 'name'],
    ['Spreadsheet', 'spreadsheet', showResourceStatus],
    ['Invoice', 'invoice', showResourceStatus],
  ];

  return (
    <DashboardCard title="Latest Orders">
      <DashboardCardTable items={data} columns={columns} />
    </DashboardCard>
  );
};

DashboardLastOrders.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default DashboardLastOrders;
