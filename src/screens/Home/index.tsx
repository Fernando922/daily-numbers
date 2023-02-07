import React from 'react';

import { Title } from './styles';

import MainContainer from '@components/MainContainer';
import { RandomList } from '@screens/RandomList';

function Home() {
  return (
    <MainContainer>
      <RandomList />
    </MainContainer>
  );
}

export default Home;
