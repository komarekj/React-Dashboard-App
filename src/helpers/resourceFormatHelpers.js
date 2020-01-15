import React from 'react';
import moment from 'moment';
import {
  Clear as ClearIcon,
  CheckCircleOutline as CheckCircleOutlineIcon,
} from '@material-ui/icons';

export const formatResourceDate = (date, format = 'MMM D, YYYY hh:mm a') =>
  moment(date).format(format);

export const showResourceStatus = finished =>
  finished ? <CheckCircleOutlineIcon color="primary" /> : <ClearIcon />;

export const showResourceActive = active =>
  active ? <CheckCircleOutlineIcon color="primary" /> : null;

export const formatUSD = value => `$${value}`;
