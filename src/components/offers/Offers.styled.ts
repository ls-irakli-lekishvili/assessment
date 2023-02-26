import { Box, styled } from '@mui/material';

export const StyledOfferContainer = styled(Box)`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 16px;
`;

export const StyleOfferItemsContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;
