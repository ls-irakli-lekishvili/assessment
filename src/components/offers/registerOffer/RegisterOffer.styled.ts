import { Box, styled } from '@mui/material';
import Button from '../../button/Button';

export const StyledRegisterOfferContainer = styled(Box)`
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const StyledRegisterButton = styled(Button)`
  position: absolute;
  top: -5px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 8px;
`;
