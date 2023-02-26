import { AppBar, Box, styled } from '@mui/material';

export const StyledAppBar = styled(AppBar)`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  img {
    cursor: pointer;
  }
`;

export const StyledAppBarLeftPanel = styled(Box)`
  display: flex;
  align-items: center;
  gap: 24px;
`;
export const StyledAppBarRightPanel = styled(Box)`
  display: flex;
  align-items: center;
  gap: 24px;
`;
