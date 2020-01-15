import React from 'react';
import PropTypes from 'prop-types';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';

const DashboardCardTable = ({ columns, items }) => (
  <TableContainer>
    <Table>
      <TableHead>
        <TableRow>
          {columns.map(([header]) => (
            <TableCell key={header}>{header}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {items.map(item => (
          <TableRow key={item._id}>
            {columns.map(([header, valueKey, formatter]) => (
              <TableCell key={valueKey}>
                {formatter ? formatter(item[valueKey]) : item[valueKey]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

DashboardCardTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.array).isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DashboardCardTable;
