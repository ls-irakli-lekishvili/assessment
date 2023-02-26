import { Box, Typography } from '@mui/material';
import React from 'react';
import { offerData } from './data/offerData';
import { StyledOfferContainer, StyleOfferItemsContainer } from './Offers.styled';
import OffersItem from './offersItem/OffersItem';
import RegisterOffer from './registerOffer/RegisterOffer';

const Offers = () => {
  return (
    <Box sx={{ position: 'relative', zIndex: 10 }}>
      <Typography variant="h6" color="secondary">
        შეთავაზებები
      </Typography>
      <StyledOfferContainer mt={2}>
        <StyleOfferItemsContainer>
          {offerData.map((offer) => (
            <OffersItem key={offer.id} {...offer} />
          ))}
        </StyleOfferItemsContainer>
        <Box>
          <RegisterOffer />
        </Box>
      </StyledOfferContainer>
    </Box>
  );
};

export default Offers;
