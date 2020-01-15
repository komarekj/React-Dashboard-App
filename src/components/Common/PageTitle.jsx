import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  pageTitle: {
    marginBottom: '1rem',
  },
});

const PageTitle = ({ children }) => {
  const classes = useStyles();

  return (
    <Typography
      variant="h4"
      component="h1"
      classes={{ root: classes.pageTitle }}
    >
      {children}
    </Typography>
  );
};

PageTitle.propTypes = {
  children: PropTypes.node,
};

export default PageTitle;
