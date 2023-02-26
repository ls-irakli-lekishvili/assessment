import { Typography } from '@mui/material';
import React from 'react';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import TodayOutlinedIcon from '@mui/icons-material/TodayOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import type { INewsData, ItemTypeT } from '../data/dummyData';
import { StyledPaper, StyledPaperImage, StyledPaperInfo } from './NewsItem.styled';
import { formatDate } from '../../../utils/dateFormatter';

const newsItemIconTitle: Record<ItemTypeT, string> = {
  news: 'სიახლე',
  event: 'ღონისძიება',
  announcement: 'განცხადება',
};

const NewsItemIcons: React.FC<{ type: ItemTypeT }> = ({ type }) => {
  if (type === 'news') return <FeedOutlinedIcon color="secondary" />;
  if (type === 'event') return <TodayOutlinedIcon color="secondary" />;
  return <CampaignOutlinedIcon color="secondary" />;
};

const NewsItem: React.FC<INewsData> = ({ content, date, icon, itemType, title }) => {
  return (
    <StyledPaper elevation={0}>
      <StyledPaperImage component="img" src={icon} />
      <StyledPaperInfo>
        <Typography variant="body2" color="secondary" mr={2}>
          {formatDate(date)}
        </Typography>
        <NewsItemIcons type={itemType} />
        <Typography variant="body2" color="secondary">
          {newsItemIconTitle[itemType]}
        </Typography>
      </StyledPaperInfo>
      <Typography variant="h6" fontWeight="bold" color="secondary" sx={{cursor: 'pointer'}}>
        {title}
      </Typography>
      <Typography variant="body1" color="secondary">
        {content}
      </Typography>
    </StyledPaper>
  );
};

export default NewsItem;
