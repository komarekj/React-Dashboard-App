import React from 'react';

import { Grid } from '@material-ui/core';
import {
  DashboardLastOrders,
  DashboardLastRewards,
  DashboardMembersStats,
  DashboardNewMembers,
  DashboardSyncGraph,
} from './DashboardCards';
import DashboardSkeleton from './DashboardSkeleton';
import DashboardError from './DashboardError';
import { PageTitle } from '../Common';
import useDashboard from './useDashboard';

const Dashboard = () => {
  const { data, isLoading, hasError } = useDashboard();

  return (
    <>
      <PageTitle>Dashboard</PageTitle>

      {isLoading && <DashboardSkeleton />}
      {hasError && <DashboardError />}

      {!isLoading && !hasError && data && (
        <Grid container spacing={2}>
          <Grid item sm={8}>
            <DashboardSyncGraph data={data.orderSyncReport} />
          </Grid>
          <Grid item sm={4}>
            <DashboardLastOrders data={data.lastOrders} />
          </Grid>
          <Grid item sm={4}>
            <DashboardMembersStats data={data.memberStats} />
          </Grid>
          <Grid item sm={4}>
            <DashboardNewMembers data={data.lastMembers} />
          </Grid>
          <Grid item sm={4}>
            <DashboardLastRewards data={data.lastRewards} />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Dashboard;
