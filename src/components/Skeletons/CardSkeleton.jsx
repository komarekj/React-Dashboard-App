import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

const CardSkeleton = () => (
  <Card>
    <CardContent>
      <Skeleton width={120} height={50} />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </CardContent>
  </Card>
);

export default CardSkeleton;
