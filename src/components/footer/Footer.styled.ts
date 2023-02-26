import { Box, styled } from '@mui/material';

export const StyledFooterContainer = styled(Box)`
  position: relative;
  z-index: 10;
  height: 220px;
  background: ${({ theme }) => theme.palette.secondary.light};
`;

export const StyledFooterMiniMap = styled(Box)`
  width: 100%;
  height: 100%;
`;

export const StyledFooterPin = styled(Box)`
  position: absolute;
  width: 30%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -80%);
`;

export const StyledFooterMiniMapContainer = styled(Box)`
  position: relative;
  width: 100px;
`;
