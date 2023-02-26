import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, ThemeProvider } from '@mui/material';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import NavBar from './components/navBar/NavBar';
import Home from './pages/home/Home';
import theme from './stylesheets/stylesheet';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <Header />
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
