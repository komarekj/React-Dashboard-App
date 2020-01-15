import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  skeletonWrap: {
    padding: theme.spacing(5),
  },
}));

const ShopifyAppWrap = ({ children }) => {
  const classes = useStyles();

  return (
    <Container fixed classes={{ root: classes.skeletonWrap }}>
      {children}
    </Container>
  );
};

ShopifyAppWrap.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ShopifyAppWrap;
