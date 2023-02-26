import { Box, styled } from '@mui/material';
import Button from '../../components/button/Button';

export const StyledPageTitle = styled(Box)`
  margin-top: 24px;
  color: ${(props) => props.theme.palette.success.main};
`;

export const StyledHomeShopButton = styled(Button)`
  margin-top: 30px;
  padding: 15px 50px;
  border-radius: 35px;
`;
