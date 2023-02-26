import { Box, Paper, styled } from '@mui/material';

export const StyledOfferItemPaper = styled(Paper)`
  position: relative;
  width: 100%;
  height: 70%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  border-radius: 16px;
  overflow: hidden;

  &:hover {
    opacity: 0.8;
  }
`;

export const StyledOfferDiscount = styled(Box)`
  position: absolute;
  border-radius: 50%;
  width: 3.5rem;
  height: 3.5rem;
  bottom: -5%;
  left: -5%;
  background: ${({ theme }) => theme.palette.success.light};
  img {
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 35%;
    margin-top: 20%;
  }
`;

export const StyledHeartContainer = styled(Box)`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  margin: 10px;
  img {
    width: 35px;
    height: 35px;
  }
`;

export const StyledWhiteBubble = styled(Box)`
  width: 45px;
  height: 45px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 50%;
  position: absolute;
  right: 0;
  bottom: 0;
  cursor: pointer;
`;
