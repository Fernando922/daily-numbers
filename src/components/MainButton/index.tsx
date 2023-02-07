import React from 'react';

import { Container, Title } from './styles';
import { Props } from './types';

const MainButton = ({ title, onPress, viewStyle }: Props) => {
  return (
    <Container onPress={onPress} style={viewStyle}>
      <Title>{title}</Title>
    </Container>
  );
};

export default MainButton;
