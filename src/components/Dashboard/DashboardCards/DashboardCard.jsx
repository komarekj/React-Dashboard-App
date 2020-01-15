import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  dashboardCard: {
    height: '100%',
  },
});

const DashboardCard = ({ title, children }) => {
  const classes = useStyles();

  return (
    <Card classes={{ root: classes.dashboardCard }}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="h4">
          {title}
        </Typography>
        {children}
      </CardContent>
    </Card>
  );
};

DashboardCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default DashboardCard;
