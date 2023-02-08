import React from 'react';

import { Container, LoadingSpinner } from './styles';
import { Props } from './types';

export const Loading = ({ children, isActive }: Props) => {
  return isActive ? (
    <Container>
      <LoadingSpinner />
    </Container>
  ) : (
    children
  );
};
