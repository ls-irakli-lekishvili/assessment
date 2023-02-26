import { Button, styled } from '@mui/material';

interface StyleButtonProps {
  $customVariant: 'primary' | 'secondary';
}

export const StyleButton = styled(Button)<StyleButtonProps>`
  padding: 10px 25px;
  border-radius: 20px;
  background: ${({ $customVariant, theme }) =>
    $customVariant === 'primary' ? theme.palette.primary.main : theme.palette.common.white};
  color: ${({ theme }) => theme.palette.secondary.main};

  &:hover {
    background: ${({ $customVariant, theme }) =>
      $customVariant === 'primary' ? theme.palette.primary.light : theme.palette.secondary.light};
  }
`;
