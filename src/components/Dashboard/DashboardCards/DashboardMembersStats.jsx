import React from 'react';
import PropTypes from 'prop-types';
import {
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import DashboardCard from './DashboardCard';

const DashboardMembersStats = ({ data }) => {
  const stats = [
    ['Total Members', data.total],
    ['Active Members', data.active],
    ['Expired Members', data.expired],
    ['Bronze Tier Members', data.bronzeTier],
    ['Gold Tier Members', data.goldTier],
  ];

  return (
    <DashboardCard title="Membership Stats">
      <TableContainer>
        <Table>
          <TableBody>
            {stats.map(([title, value]) => (
              <TableRow key={title}>
                <TableCell variant="head">{title}</TableCell>
                <TableCell>{value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </DashboardCard>
  );
};

DashboardMembersStats.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default DashboardMembersStats;
