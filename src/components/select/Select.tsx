import React from 'react';
import { MenuItem } from '@mui/material';
import type { SelectProps } from '@mui/material';
import { StyledSelect } from './Select.styled';

interface ICustomSelectProps {
  items: Array<{ value: string | number; view: JSX.Element | string }>;
  defaultSelectedIndex: number;
}

const CustomSelect: React.FC<ICustomSelectProps & SelectProps> = ({
  items,
  defaultSelectedIndex,
  children,
  ...props
}) => {
  return (
    <StyledSelect
      disableUnderline
      defaultValue={items[defaultSelectedIndex].value}
      {...props}
      color="secondary"
      variant="filled"
    >
      {items.map(({ value, view }) => (
        <MenuItem key={value} value={value}>
          {view}
        </MenuItem>
      ))}
    </StyledSelect>
  );
};

export default CustomSelect;
