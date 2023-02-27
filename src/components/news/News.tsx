import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { newsData } from './data/dummyData';
import NewsItem from './newsItem/NewsItem';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const News = () => {
  return (
    <Box mt={5} sx={{ position: 'relative', zIndex: 5 }}>
      <Typography variant="h6" color="secondary">
        სიახლეები
      </Typography>
      <Stack direction="row" spacing={2} mt={1}>
        {newsData.map((data) => (
          <NewsItem key={data.id} {...data} />
        ))}
      </Stack>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
        <ArrowForwardIosIcon sx={{ color: 'success.main' }} />
        <Typography variant="h6" pb={1} fontWeight="bold" color="success.main">
          ყველა სიახლე
        </Typography>
      </Box>
    </Box>
  );
};

export default News;
