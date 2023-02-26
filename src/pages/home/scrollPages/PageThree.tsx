import { Box } from '@mui/material';
import React from 'react';
import { ScrollPage, Animator, batch, Fade, Sticky } from 'react-scroll-motion';
import leaf1 from '../../../assets/animation/leaf1.svg';
import Offers from '../../../components/offers/Offers';

const PageThree = () => {
  return (
    <ScrollPage style={{ height: '740px' }}>
      <Animator animation={batch(Fade(), Sticky(75, 65))}>
        <Box width={250} height={600} sx={{ position: 'relative' }}>
          <Box component="img" src={leaf1} height="95%" sx={{ position: 'absolute', top: '-8%', left: '35%' }} />
        </Box>
      </Animator>
      <Offers />
    </ScrollPage>
  );
};

export default PageThree;
