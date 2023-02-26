import React from 'react';
import { ScrollContainer } from 'react-scroll-motion';
import PageOne from './scrollPages/PageOne';
import PageThree from './scrollPages/PageThree';
import PageTwo from './scrollPages/PageTwo';

const Home: React.FC = () => {
  return (
    <>
      <ScrollContainer>
        <PageOne />
        <PageTwo />
        <PageThree />
      </ScrollContainer>
    </>
  );
};

export default Home;
