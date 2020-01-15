import React from 'react';
import { Skeleton } from '@material-ui/lab';
import PageTitle from '../Common/PageTitle';

const PageTitleSkeleton = () => (
  <PageTitle>
    <Skeleton width={240} height={60} />
  </PageTitle>
);

export default PageTitleSkeleton;
