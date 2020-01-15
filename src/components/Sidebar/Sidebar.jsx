import React from 'react';
import { Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SidebarNavigation from './SidebarNavigation';

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    width: theme.sidebar.width,
    flexShrink: 0,
    [theme.breakpoints.up('lg')]: {
      marginTop: '4rem',
      height: 'calc(100% - 4rem)',
    },
  },
  sidebar: {
    width: theme.sidebar.width,
    flexShrink: 0,
  },
  sidebarInner: {
    padding: theme.spacing(2),
  },
}));

const Sidebar = () => {
  const classes = useStyles();

  return (
    <aside className={classes.sidebar}>
      <Drawer
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.sidebarInner}>
          <SidebarNavigation />
        </div>
      </Drawer>
    </aside>
  );
};

export default Sidebar;
