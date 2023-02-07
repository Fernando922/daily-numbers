import styled from 'styled-components/native';

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  align-self: center;
  margin-bottom: 48px;
  color: ${({ theme }) => theme.colors.primary};
`;
