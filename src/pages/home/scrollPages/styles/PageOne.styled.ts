import { Box, styled, Typography } from '@mui/material';
import Button from '../../../../components/button/Button';

export const StyledLeaf1 = styled(Box)`
  position: absolute;
  top: 15%;
  left: 70%;
  height: 50%;

  ${(props) => props.theme.breakpoints.up('sm')} {
    top: 15%;
    left: 70%;
    height: 50%;
  }

  ${(props) => props.theme.breakpoints.up('lg')} {
    top: 5%;
    left: 35%;
    height: 75%;
  }
`;

export const StyledLeaf2 = styled(Box)`
  position: absolute;
  top: 50%;
  left: -100%;
  height: 50%;

  ${(props) => props.theme.breakpoints.up('sm')} {
    top: 50%;
    left: -100%;
    height: 50%;
  }

  ${(props) => props.theme.breakpoints.up('lg')} {
    top: 40%;
    left: -200%;
    height: 75%;
  }
`;

export const StyledRectangle = styled(Box)`
  position: absolute;
  top: 20%;
  left: 25%;
  height: 60%;

  ${(props) => props.theme.breakpoints.up('sm')} {
    top: 20%;
    left: 25%;
    height: 60%;
  }

  ${(props) => props.theme.breakpoints.up('lg')} {
    top: 5%;
    left: initial;
    height: 100%;
  }
`;

export const StyledLeafsm1 = styled(Box)`
  position: absolute;
  width: 15%;
  top: 20%;
  left: 5%;

  ${(props) => props.theme.breakpoints.up('sm')} {
    top: 20%;
    left: 5%;
  }

  ${(props) => props.theme.breakpoints.up('lg')} {
    top: 8%;
    left: -20%;
  }
`;

export const StyledLeafsm2 = styled(Box)`
  position: absolute;
  width: 15%;
  top: 15%;
  left: 35%;

  ${(props) => props.theme.breakpoints.up('sm')} {
    top: 15%;
    left: 35%;
  }

  ${(props) => props.theme.breakpoints.up('lg')} {
    top: -2%;
    left: 15%;
  }
`;

export const StyledView = styled(Box)`
  position: absolute;
  top: 25%;
  left: -25%;
  height: 60%;

  ${(props) => props.theme.breakpoints.up('sm')} {
    top: 25%;
    left: -25%;
    height: 60%;
  }

  ${(props) => props.theme.breakpoints.up('lg')} {
    top: 18%;
    left: -75%;
    height: 90%;
  }
`;

export const StyledFarmer = styled(Box)`
  position: absolute;
  top: 15%;
  left: 55%;
  height: 60%;

  ${(props) => props.theme.breakpoints.up('sm')} {
    top: 15%;
    left: 55%;
    height: 60%;
  }

  ${(props) => props.theme.breakpoints.up('lg')} {
    top: 0;
    left: 35%;
    height: 95%;
  }
`;

export const StyledPageTitle = styled(Typography)`
  font-size: 5rem;
  color: ${(props) => props.theme.palette.success.main};

  ${(props) => props.theme.breakpoints.up('lg')} {
    font-size: 6rem;
  }
`;

export const StyledHomeShopButton = styled(Button)`
  margin-top: 30px;
  padding: 15px 50px;
  border-radius: 35px;
`;
