import React from 'react';

import { Container } from './styles';
import { Props } from './types';

const MainContainer = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default MainContainer;
