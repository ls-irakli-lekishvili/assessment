import { Link, styled, Toolbar } from '@mui/material';

interface StyledAppBarProps {
  $isActive: boolean;
}

export const StyledNavBar = styled(Link)<StyledAppBarProps>`
  color: ${({ $isActive, theme }) => {
    return $isActive ? theme.palette.success.main : 'currentColor';
  }};
`;

export const StyledToolBar = styled(Toolbar)`
  position: sticky;
  top: 0;
  padding: 0;
  display: flex;
  gap: 24px;
  width: 100%;
  background: white;
  z-index: 1000;
`;
