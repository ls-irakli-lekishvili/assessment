import { Divider } from '@mui/material';
import React from 'react';
import { ScrollPage } from 'react-scroll-motion';
import Carousel from '../../../components/carousel/Carousel';
import News from '../../../components/news/News';

const images = [
  'https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80',
  'https://images.winalist.com/blog/wp-content/uploads/2022/05/03172113/morra-langhe-piedmont-landscape-1600x899.jpg',
  'https://c4.wallpaperflare.com/wallpaper/277/483/709/red-wine-bottle-and-glass-wallpaper-preview.jpg',
  'https://c4.wallpaperflare.com/wallpaper/905/960/1010/landscape-table-wine-bottle-wallpaper-preview.jpg',
  'https://c4.wallpaperflare.com/wallpaper/240/43/618/table-wine-red-glass-wallpaper-preview.jpg',
];

const PageTwo = () => {
  return (
    <ScrollPage style={{ height: '1100px' }}>
      <Carousel images={images} />
      <News />
      <Divider sx={{ margin: '30px 0' }} />
    </ScrollPage>
  );
};

export default PageTwo;
