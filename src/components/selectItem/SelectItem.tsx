import { Box, Typography } from '@mui/material';
import React from 'react';
import { StyledSelectItem } from './SelectItem.styled';

interface ISelectItem {
  imageSrc: string;
  text: string;
}

const SelectItem: React.FC<ISelectItem> = ({ imageSrc, text }) => {
  return (
    <StyledSelectItem>
      <Box component="img" src={imageSrc} />
      <Typography variant="subtitle1">{text}</Typography>
    </StyledSelectItem>
  );
};

export default SelectItem;
