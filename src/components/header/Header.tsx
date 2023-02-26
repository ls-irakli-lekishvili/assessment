import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Box, Typography } from '@mui/material';
import React from 'react';
import union from '../../assets/europeanUnion.svg';
import flagGeorgia from '../../assets/flagGeorgia.png';
import flagUsa from '../../assets/flagUsa.jpg';
import logo from '../../assets/logo.png';
import Button from '../button/Button';
import Select from '../select/Select';
import SelectItem from '../selectItem/SelectItem';
import { StyledAppBar, StyledAppBarLeftPanel, StyledAppBarRightPanel } from './Header.styled';

const Header: React.FC = () => {
  const items = [
    { value: 'KA', view: <SelectItem imageSrc={flagGeorgia} text="ქართული" /> },
    { value: 'EN', view: <SelectItem imageSrc={flagUsa} text="English" /> },
  ];

  return (
    <StyledAppBar position="static" color="transparent" elevation={0}>
      <StyledAppBarLeftPanel>
        <Box sx={{ height: '80px' }} component="img" src={logo} area-label="logo" alt="logo" />
        <Box sx={{ height: '50px' }} component="img" src={union} area-label="union" alt="union" />
      </StyledAppBarLeftPanel>
      <StyledAppBarRightPanel>
        <Select items={items} defaultSelectedIndex={0} />
        <AccountCircleOutlinedIcon color="secondary" fontSize="large" sx={{ cursor: 'pointer' }} />
        <ShoppingCartOutlinedIcon color="secondary" fontSize="large" sx={{ cursor: 'pointer' }} />
        <Button customVariant="primary" startIcon={<LocalMallOutlinedIcon color="secondary" />} disableElevation>
          <Typography color="secondary" fontWeight="bold">
            მაღაზია
          </Typography>
        </Button>
      </StyledAppBarRightPanel>
    </StyledAppBar>
  );
};

export default Header;
