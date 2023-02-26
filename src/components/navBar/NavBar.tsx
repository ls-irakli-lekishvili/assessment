import { Typography } from '@mui/material';
import React from 'react';
import { Link as RouterLink, Outlet, useLocation } from 'react-router-dom';
import { StyledNavBar, StyledToolBar } from './NavBar.styled';

const navigations = [
  { name: 'მთავარი', path: '/' },
  { name: 'სიახლეები', path: '/news' },
  { name: 'ჩვენს შესახებ', path: '/about' },
  { name: 'ბოლნისის მუნიციპალიტეტი', path: '/info' },
  { name: 'წესები და პირობები', path: '/rules' },
  { name: 'კონტაქტი', path: '/contact' },
];

const NavBar: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <StyledToolBar>
        {navigations.map(({ name, path }) => (
          <StyledNavBar
            $isActive={location.pathname === path}
            key={name}
            component={RouterLink}
            to={path}
            underline="none"
          >
            <Typography variant="h6">{name}</Typography>
          </StyledNavBar>
        ))}
      </StyledToolBar>
      <Outlet />
    </>
  );
};

export default NavBar;
