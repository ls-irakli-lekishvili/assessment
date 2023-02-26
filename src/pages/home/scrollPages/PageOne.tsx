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
          <Box component="img" src={leaf1} height="85%" sx={{ position: 'absolute', top: '-8%', left: '35%' }} />
        </Box>
      </Animator>
      <Animator animation={batch(Fade(), Sticky(70, 55))}>
        <Box width={250} height={600} sx={{ position: 'relative' }}>
          <Box component="img" src={leaf2} height="75%" sx={{ position: 'absolute', top: '40%', left: '-200%' }} />
        </Box>
      </Animator>
      <Animator animation={batch(Fade(), Sticky(70, 55))}>
        <Box width={250} sx={{ position: 'relative' }}>
          <Box component="img" src={rectangle} />
          <Box component="img" src={leafsm1} width={30} sx={{ position: 'absolute', top: '2%', left: '-18%' }} />
          <Box component="img" src={leafsm2} width={30} sx={{ position: 'absolute', top: '-5%', left: '15%' }} />
        </Box>
      </Animator>
      <Animator animation={batch(Fade(), Sticky(70, 55), MoveOut(-500, 0))}>
        <Box width={250} height={600} sx={{ position: 'relative' }}>
          <Box component="img" src={view} height="90%" sx={{ position: 'absolute', top: '12%', left: '-75%' }} />
        </Box>
      </Animator>
      <Animator animation={batch(Fade(), Sticky(70, 55), MoveOut(200, 0))}>
        <Box width={250} height={600} sx={{ position: 'relative' }}>
          <Box component="img" src={farmer} height="95%" sx={{ position: 'absolute', top: '-8%', left: '35%' }} />
        </Box>
      </Animator>
      <StyledPageTitle>
        <Typography component="h1" variant="h1">
          ბოლნისის
        </Typography>
        <Typography component="h1" variant="h1">
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
