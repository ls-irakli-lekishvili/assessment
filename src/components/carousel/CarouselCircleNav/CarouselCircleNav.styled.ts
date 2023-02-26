import { Box, styled } from '@mui/material';

export const StyledCarouselCircle = styled(Box)`
  border-radius: 50%;
  width: 10px;
  height: 10px;
  border: 1px solid ${({ theme }) => theme.palette.common.white};
`;
export const StyledCarouselCircleFilled = styled(Box)`
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background: ${({ theme }) => theme.palette.warning.light};
`;
