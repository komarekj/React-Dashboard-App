import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  icon: {
    minWidth: 'auto',
    marginRight: theme.spacing(2),
  },
  link: {
    fontSize: '.85rem',
  },
}));

const SidebarNavigationItem = ({ label, icon, path, active = false }) => {
  const history = useHistory();
  const classes = useStyles();
  const ItemIcon = icon;

  const handleItemClick = () => {
    history.push(path);
  };

  return (
    <ListItem onClick={handleItemClick} selected={active} button>
      <ListItemIcon classes={{ root: classes.icon }}>
        <ItemIcon />
      </ListItemIcon>
      <ListItemText primary={label} classes={{ primary: classes.link }} />
    </ListItem>
  );
};

SidebarNavigationItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

export default SidebarNavigationItem;
