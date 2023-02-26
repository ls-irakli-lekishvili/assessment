import React from 'react';
import type { ButtonProps } from '@mui/material';
import { StyleButton } from './Button.styled';

interface CustomButtonProps extends Omit<ButtonProps, 'variant'> {
  customVariant: 'primary' | 'secondary';
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, customVariant, ...props }) => {
  return (
    <StyleButton $customVariant={customVariant} {...props}>
      {children}
    </StyleButton>
  );
};

export default CustomButton;
