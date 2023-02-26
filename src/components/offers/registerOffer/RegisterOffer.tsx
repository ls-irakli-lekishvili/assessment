import { Box, Typography } from '@mui/material';
import React from 'react';
import event from '../../../assets/event.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { StyledRegisterButton, StyledRegisterOfferContainer } from './RegisterOffer.styled';

const RegisterOffer = () => {
  return (
    <StyledRegisterOfferContainer>
      <Box component="img" src={event} />
      <StyledRegisterButton customVariant="secondary" endIcon={<ArrowForwardIcon />}>
        <Typography variant="h6" color="secondary" fontWeight="bold">
          რეგისტრაცია
        </Typography>
      </StyledRegisterButton>
    </StyledRegisterOfferContainer>
  );
};

export default RegisterOffer;
