import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  header: {
    zIndex: 10,
    boxShadow: 'none',
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.header}>
      <Toolbar>
        <Link to="/">
          <img src="/kp-logo.png" width="132" alt="logo" />
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
