import { Box, Paper, styled } from '@mui/material';

export const StyledPaper = styled(Paper)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledPaperImage = styled(Box)`
  min-height: 200px;
  width: 100%;
  border-radius: 10px;
`;

export const StyledPaperInfo = styled(Box)`
  display: flex;
  align-items: center;
`;
