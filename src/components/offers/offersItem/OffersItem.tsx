import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import type { IOfferData } from '../data/offerData';
import {
  StyledHeartContainer,
  StyledOfferDiscount,
  StyledOfferItemPaper,
  StyledWhiteBubble,
} from './OffersItem.styled';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import percent from '../../../assets/percent.png';
import heart from '../../../assets/heart.png';

const OffersItem: React.FC<IOfferData> = ({ imageSrc, name, oldPrice, origin, price }) => {
  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <StyledOfferItemPaper elevation={0} sx={{ backgroundImage: `url('${imageSrc}')` }}>
        <StyledOfferDiscount>
          <Box component="img" src={percent} />
        </StyledOfferDiscount>
        <StyledHeartContainer>
          <Box component="img" src={heart} />
        </StyledHeartContainer>
        <StyledWhiteBubble>
          <AddShoppingCartOutlinedIcon />
        </StyledWhiteBubble>
      </StyledOfferItemPaper>
      <Typography color="secondary" variant="body1" mt={2}>
        {origin}
      </Typography>
      <Typography color="secondary" variant="h6">
        {name}
      </Typography>

      <Stack direction="row" alignItems="end" spacing={1} mt={1}>
        <Typography color="success.main" variant="h4">
          {price}
        </Typography>
        <Typography color="secondary" variant="h6" sx={{ textDecoration: 'line-through' }}>
          {oldPrice}
        </Typography>
      </Stack>
    </Box>
  );
};

export default OffersItem;
