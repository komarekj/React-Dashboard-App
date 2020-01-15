import React from 'react';
import { Grid } from '@material-ui/core';
import ShopifyAppWrap from './ShopifyAppWrap';
import { PageTitleSkeleton, CardSkeleton } from '../Skeletons';

const ShopifyAppSkeleton = () => (
  <ShopifyAppWrap>
    <PageTitleSkeleton />

    <Grid container spacing={2}>
      <Grid item sm="4">
        <CardSkeleton />
      </Grid>
      <Grid item sm="4">
        <CardSkeleton />
      </Grid>
      <Grid item sm="4">
        <CardSkeleton />
      </Grid>
      <Grid item sm="4">
        <CardSkeleton />
      </Grid>
      <Grid item sm="4">
        <CardSkeleton />
      </Grid>
      <Grid item sm="4">
        <CardSkeleton />
      </Grid>
    </Grid>
  </ShopifyAppWrap>
);

export default ShopifyAppSkeleton;
