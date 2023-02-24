import React from 'react';
import { Button, styled } from '@mui/material';

const CustomButton = styled(Button)`
  margin: 10px;
`;

const App: React.FC = () => {
  return <CustomButton variant="contained"> workingggg</CustomButton>;
};

export default App;
