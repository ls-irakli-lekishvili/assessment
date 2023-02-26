import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import {
  StyledFooterContainer,
  StyledFooterMiniMap,
  StyledFooterMiniMapContainer,
  StyledFooterPin,
} from './Footer.styled';
import bolnisiLogo from '../../assets/bolnisiLogo.png';
import miniMap from '../../assets/miniMap.png';
import locationPin from '../../assets/locationPin.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RedditIcon from '@mui/icons-material/Reddit';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer: React.FC = () => {
  return (
    <StyledFooterContainer component="footer">
      <Container maxWidth="lg" sx={{ height: '100%' }}>
        <Stack direction="row" height="100%" alignItems="center" spacing={6}>
          <Box component="img" alt="bolnisi logo" src={bolnisiLogo} height="100px" mr={6} />
          <Stack spacing={1}>
            <Typography variant="body1" color="secondary" sx={{ cursor: 'pointer' }}>
              მთავარი
            </Typography>
            <Typography variant="body1" color="secondary" sx={{ cursor: 'pointer' }}>
              სიახლეები
            </Typography>
            <Typography variant="body1" color="secondary" sx={{ cursor: 'pointer' }}>
              ჩვენს შესახებ
            </Typography>
          </Stack>
          <Stack spacing={1}>
            <Typography variant="body1" color="secondary" sx={{ cursor: 'pointer' }}>
              ბოლნისის მუნიციპალიტეტი
            </Typography>
            <Typography variant="body1" color="secondary" sx={{ cursor: 'pointer' }}>
              წესები და პირობები
            </Typography>
            <Typography variant="body1" color="secondary" sx={{ cursor: 'pointer' }}>
              კონტაქტი
            </Typography>
          </Stack>
          <Stack spacing={1}>
            <Typography variant="body1" color="secondary">
              დაგვიკავშირდით
            </Typography>
            <a
              href="tel:+995-551-25-00-26"
              color="secondary"
              aria-label="call"
              role="call"
              style={{ textDecoration: 'none', cursor: 'pointer' }}
            >
              <Typography variant="body1" color="secondary">
                +995 551 25 00 26
              </Typography>
            </a>
            <Stack direction="row" spacing={1}>
              <FacebookIcon color="secondary" sx={{ cursor: 'pointer' }} />
              <InstagramIcon color="secondary" sx={{ cursor: 'pointer' }} />
              <LinkedInIcon color="secondary" sx={{ cursor: 'pointer' }} />
              <RedditIcon color="secondary" sx={{ cursor: 'pointer' }} />
              <YouTubeIcon color="secondary" sx={{ cursor: 'pointer' }} />
            </Stack>
          </Stack>
          <StyledFooterMiniMapContainer>
            <StyledFooterMiniMap component="img" alt="bolnisi logo" src={miniMap} />
            <StyledFooterPin component="img" alt="bolnisi logo" src={locationPin} />
          </StyledFooterMiniMapContainer>
          <Stack spacing={1}>
            <Typography variant="body1" color="secondary" sx={{ cursor: 'pointer' }}>
              დავით აღმაშენებლის 13ა, ბოლნისი, საქართველო
            </Typography>
            <a
              href="mailto:agrocentribolnisi@gmail.com"
              aria-label="email"
              role="email"
              style={{ textDecoration: 'none', cursor: 'pointer' }}
            >
              <Typography variant="body1" color="secondary" textTransform="initial">
                agrocentribolnisi@gmail.com
              </Typography>
            </a>
          </Stack>
        </Stack>
      </Container>
    </StyledFooterContainer>
  );
};

export default Footer;
