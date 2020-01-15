import React from 'react';
import PropTypes from 'prop-types';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { randomWidth } from './skeletonHelpers';

const TableSkeleton = ({ rows = 10, cells = 6 }) => (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          {[...Array(cells)].map((cell, cellIdx) => (
            <TableCell key={cellIdx}>
              <Skeleton width={randomWidth()} />
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {[...Array(rows)].map((row, rowIdx) => (
          <TableRow key={rowIdx}>
            {[...Array(cells)].map((cell, cellIdx) => (
              <TableCell key={`${rowIdx}_${cellIdx}`}>
                {cell}
                <Skeleton width={randomWidth()} />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

TableSkeleton.propTypes = {
  rows: PropTypes.number,
  cells: PropTypes.number,
};

export default TableSkeleton;
