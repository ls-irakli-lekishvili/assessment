import { Box, Typography } from '@mui/material';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import React from 'react';
import { ScrollPage, Animator, batch, Fade, Sticky, MoveOut } from 'react-scroll-motion';
import rectangle from '../../../assets/animation/rectangle.svg';
import leafsm1 from '../../../assets/animation/leafsm1.svg';
import leaf1 from '../../../assets/animation/leaf1.svg';
import leafsm2 from '../../../assets/animation/leafsm2.svg';
import leaf2 from '../../../assets/animation/leaf2.svg';
import view from '../../../assets/animation/view.png';
import farmer from '../../../assets/animation/farmer.png';
import {
  StyledFarmer,
  StyledHomeShopButton,
  StyledLeaf1,
  StyledLeaf2,
  StyledLeafsm1,
  StyledLeafsm2,
  StyledPageTitle,
  StyledRectangle,
  StyledView,
} from './styles/PageOne.styled';

const PageOne = () => {
  return (
    <ScrollPage>
      <Animator animation={batch(Fade(), Sticky(70, 55))}>
        <Box width={250} height={600} sx={{ position: 'relative' }}>
          <StyledLeaf1 component="img" src={leaf1} />
        </Box>
      </Animator>
      <Animator animation={batch(Fade(), Sticky(70, 55))}>
        <Box width={250} height={600} sx={{ position: 'relative' }}>
          <StyledLeaf2 component="img" src={leaf2} />
        </Box>
      </Animator>
      <Animator animation={batch(Fade(), Sticky(70, 55))}>
        <Box width={250} height={600} sx={{ position: 'relative' }}>
          <StyledRectangle component="img" src={rectangle} />
          <StyledLeafsm1 component="img" src={leafsm1} />
          <StyledLeafsm2 component="img" src={leafsm2} />
        </Box>
      </Animator>
      <Animator animation={batch(Fade(), Sticky(70, 55), MoveOut(-500, 0))}>
        <Box width={250} height={600} sx={{ position: 'relative' }}>
          <StyledView component="img" src={view} />
        </Box>
      </Animator>
      <Animator animation={batch(Fade(), Sticky(70, 55), MoveOut(200, 0))}>
        <Box width={250} height={600} sx={{ position: 'relative' }}>
          <StyledFarmer component="img" src={farmer} />
        </Box>
      </Animator>
      <Box mt="24px">
        <StyledPageTitle component="h1" variant="h1">
          ბოლნისის
        </StyledPageTitle>
        <StyledPageTitle component="h1" variant="h1">
          აგროცენტრი
        </StyledPageTitle>
      </Box>
      <StyledHomeShopButton
        size="large"
        customVariant="primary"
        startIcon={<LocalMallOutlinedIcon color="secondary" />}
        disableElevation
      >
        <Typography color="secondary" fontWeight="bold">
          მაღაზია
        </Typography>
      </StyledHomeShopButton>
    </ScrollPage>
  );
};

export default PageOne;
