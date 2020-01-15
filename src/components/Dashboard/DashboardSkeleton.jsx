import React from 'react';
import { Grid } from '@material-ui/core';
import { CardSkeleton } from '../Skeletons';

const DashboardSkeleton = () => (
  <Grid container spacing={2}>
    <Grid item sm={8}>
      <CardSkeleton />
    </Grid>
    <Grid item sm={4}>
      <CardSkeleton />
    </Grid>
    <Grid item sm={4}>
      <CardSkeleton />
    </Grid>
    <Grid item sm={4}>
      <CardSkeleton />
    </Grid>
    <Grid item sm={4}>
      <CardSkeleton />
    </Grid>
    <Grid item sm={4}>
      <CardSkeleton />
    </Grid>
    <Grid item sm={4}>
      <CardSkeleton />
    </Grid>
    <Grid item sm={4}>
      <CardSkeleton />
    </Grid>
  </Grid>
);

export default DashboardSkeleton;
