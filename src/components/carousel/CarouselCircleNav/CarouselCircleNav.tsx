import { Stack } from '@mui/material';
import React from 'react';
import { StyledCarouselCircle, StyledCarouselCircleFilled } from './CarouselCircleNav.styled';

interface ICarouselCircleNavProps {
  imageAmount: number;
  currentIndex: number;
  onCircleClick: (circleIndex: number) => void;
}

const CarouselCircleNav: React.FC<ICarouselCircleNavProps> = ({ imageAmount, onCircleClick, currentIndex }) => {
  return (
    <Stack direction="row" spacing={1 / 2}>
      {[...new Array(imageAmount)].map((_, index) => {
        if (index === currentIndex)
          return <StyledCarouselCircleFilled key={index} onClick={() => onCircleClick(index)} />;
        return <StyledCarouselCircle key={index} onClick={() => onCircleClick(index)} />;
      })}
    </Stack>
  );
};

export default CarouselCircleNav;
