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

const ResourceListingTable = ({ items, columns }) => (
  <TableContainer>
    <Table dense>
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

ResourceListingTable.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default ResourceListingTable;
