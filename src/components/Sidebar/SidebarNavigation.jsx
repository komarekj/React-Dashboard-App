import React from 'react';
import { useLocation } from 'react-router-dom';
import { List } from '@material-ui/core';
import {
  Dashboard as DashboardIcon,
  ShoppingBasket as ShoppingBasketIcon,
  SupervisorAccount as SupervisorAccountIcon,
  LocalAtm as LocalAtmIcon,
} from '@material-ui/icons';
import SidebarNavigationItem from './SidebarNavigationItem';

const items = [
  {
    label: 'Dashboard',
    icon: DashboardIcon,
    path: '/',
  },
  {
    label: 'Orders',
    icon: ShoppingBasketIcon,
    path: '/orders',
  },
  {
    label: 'Membership',
    icon: SupervisorAccountIcon,
    path: '/membership',
  },
  {
    label: 'Rewards',
    icon: LocalAtmIcon,
    path: '/rewards',
  },
];

const SidebarNavigation = () => {
  const location = useLocation();

  return (
    <List componenet="nav">
      {items.map(({ label, icon, path }) => (
        <SidebarNavigationItem
          key={path}
          label={label}
          icon={icon}
          path={path}
          active={location.pathname === path}
        />
      ))}
    </List>
  );
};

export default SidebarNavigation;
