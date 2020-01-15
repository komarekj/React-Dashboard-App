import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Dashboard from '../Dashboard/Dashboard';
import Membership from '../Membership/Membership';
import Orders from '../Orders/Orders';
import Rewards from '../Rewards/Rewards';

const useStyles = makeStyles(theme => ({
  main: {
    padding: theme.spacing(5),
    flexGrow: 1,
  },
}));

const AppContent = () => {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <Switch>
        <Route path="/" exact>
          <Dashboard />
        </Route>
        <Route path="/membership">
          <Membership />
        </Route>
        <Route path="/orders">
          <Orders />
        </Route>
        <Route path="/rewards">
          <Rewards />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </main>
  );
};

export default AppContent;
