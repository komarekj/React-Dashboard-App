import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ErrorIcon from '@material-ui/icons/Error';

const useStyles = makeStyles(theme => ({
  errorCard: {
    padding: theme.spacing(2),
  },
  errorTitle: {
    display: 'flex',
    alignItems: 'center',
  },
  errorIcon: {
    marginRight: '.5rem',
  },
}));

const DashboardError = () => {
  const classes = useStyles();

  return (
    <Card classes={{ root: classes.errorCard }}>
      <CardContent>
        <Typography
          variant="h5"
          component="h2"
          classes={{ root: classes.errorTitle }}
        >
          <ErrorIcon classes={{ root: classes.errorIcon }} />
          Ooops! Something Is Broken
        </Typography>
        <Typography variant="body2" component="p">
          Reload the page and try again...
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DashboardError;
