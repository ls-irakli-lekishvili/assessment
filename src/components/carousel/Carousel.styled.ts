import { Box, styled } from '@mui/material';

export const StyledCarousel = styled(Box)`
  position: relative;
  z-index: 10;
  overflow: hidden;
  height: 462px;
  width: 100%;
`;

export const StyledCarouselInner = styled(Box)`
  display: flex;
  transition: transform 0.5s ease;
`;

export const StyledCarouselChild = styled(Box)`
  width: 100%;
  height: 462px;
  flex: 0 0 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 16px;
`;

export const StyledCarouselArrowLeft = styled(Box)`
  position: absolute;
  z-index: 11;
  top: 50%;
  left: 0;
  margin-left: 15px;
  color: ${({ theme }) => theme.palette.common.white};
`;

export const StyledCarouselArrowRight = styled(Box)`
  position: absolute;
  z-index: 11;
  top: 50%;
  right: 0;
  margin-right: 15px;
  color: ${({ theme }) => theme.palette.common.white};
`;

export const StyledCarouselController = styled(Box)`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 20px;
`;
