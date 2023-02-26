import React, { useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
  StyledCarousel,
  StyledCarouselArrowLeft,
  StyledCarouselArrowRight,
  StyledCarouselChild,
  StyledCarouselController,
  StyledCarouselInner,
} from './Carousel.styled';
import CarouselCircleNav from './CarouselCircleNav/CarouselCircleNav';

interface ICarouselProps {
  images: string[];
  startingImage?: number;
}

const Carousel: React.FC<ICarouselProps> = ({ images, startingImage }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(startingImage ?? 0);

  const goToPrevImage = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
  };

  const goToNextImage = () => {
    setCurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1);
  };

  return (
    <>
      <StyledCarousel>
        <StyledCarouselInner style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
          {images.map((image, index) => (
            <StyledCarouselChild key={index} sx={{ backgroundImage: `url('${image}')` }} />
          ))}
        </StyledCarouselInner>
        <StyledCarouselArrowRight onClick={goToNextImage}>
          <ArrowForwardIosIcon />
        </StyledCarouselArrowRight>
        <StyledCarouselArrowLeft onClick={goToPrevImage}>
          <ArrowBackIosNewIcon />
        </StyledCarouselArrowLeft>
        <StyledCarouselController>
          <CarouselCircleNav
            imageAmount={images.length}
            currentIndex={currentImageIndex}
            onCircleClick={setCurrentImageIndex}
          />
        </StyledCarouselController>
      </StyledCarousel>
    </>
  );
};

export default Carousel;
