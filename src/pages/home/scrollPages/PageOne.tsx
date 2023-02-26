import { Box, Typography } from '@mui/material';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import React from 'react';
import { ScrollPage, Animator, batch, Fade, Sticky, MoveOut } from 'react-scroll-motion';
import { StyledPageTitle, StyledHomeShopButton } from '../Home.styled';
import rectangle from '../../../assets/animation/rectangle.svg';
import leafsm1 from '../../../assets/animation/leafsm1.svg';
import leaf1 from '../../../assets/animation/leaf1.svg';
import leafsm2 from '../../../assets/animation/leafsm2.svg';
import leaf2 from '../../../assets/animation/leaf2.svg';
import view from '../../../assets/animation/view.png';
import farmer from '../../../assets/animation/farmer.png';

const PageOne = () => {
  return (
    <ScrollPage>
      <Animator animation={batch(Fade(), Sticky(70, 55))}>
        <Box width={250} height={600} sx={{ position: 'relative' }}>
          <Box
            component="img"
            src={leaf1}
            style={{ position: 'absolute' }}
            lg={{ top: '-8%', left: '35%', height: '85%' }}
            sx={{ top: '15%', left: '70%', height: '50%' }}
          />
        </Box>
      </Animator>
      <Animator animation={batch(Fade(), Sticky(70, 55))}>
        <Box width={250} height={600} sx={{ position: 'relative' }}>
          <Box
            component="img"
            src={leaf2}
            style={{ position: 'absolute' }}
            lg={{ height: '75%' }}
            sx={{ top: '50%', left: '-100%', height: '50%' }}
          />
        </Box>
      </Animator>
      <Animator animation={batch(Fade(), Sticky(70, 55))}>
        <Box width={250} height={600} sx={{ position: 'relative' }}>
          <Box
            component="img"
            src={rectangle}
            style={{ position: 'absolute' }}
            lg={{ height: '100%' }}
            sx={{ height: '60%', top: '20%', left: '25%' }}
          />
          <Box
            component="img"
            style={{ position: 'absolute', width: '30px' }}
            src={leafsm1}
            lg={{ top: '2%', left: '-18%' }}
            sx={{ top: '20%', left: '5%' }}
          />
          <Box
            component="img"
            style={{ position: 'absolute', width: '30px' }}
            src={leafsm2}
            lg={{ top: '-5%', left: '15%' }}
            sx={{ top: '15%', left: '35%' }}
          />
        </Box>
      </Animator>
      <Animator animation={batch(Fade(), Sticky(70, 55), MoveOut(-500, 0))}>
        <Box width={250} height={600} sx={{ position: 'relative' }}>
          <Box
            component="img"
            src={view}
            style={{ position: 'absolute' }}
            lg={{ top: '12%', left: '-75%', height: '90%' }}
            sx={{ top: '25%', left: '-25%', height: '60%' }}
          />
        </Box>
      </Animator>
      <Animator animation={batch(Fade(), Sticky(70, 55), MoveOut(200, 0))}>
        <Box width={250} height={600} sx={{ position: 'relative' }}>
          <Box
            component="img"
            src={farmer}
            style={{ position: 'absolute' }}
            lg={{ top: '-8%', left: '35%', height: '95%' }}
            sx={{ top: '15%', left: '55%', height: '60%' }}
          />
        </Box>
      </Animator>
      <StyledPageTitle>
        <Typography component="h1" lg={{ fontSize: '6rem' }} sx={{ fontSize: '5rem' }} variant="h1">
          ბოლნისის
        </Typography>
        <Typography component="h1" sx={{ fontSize: '5rem' }} lg={{ fontSize: '6rem' }} variant="h1">
          აგროცენტრი
        </Typography>
      </StyledPageTitle>
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
