import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

type InputProps = {
  editable: boolean;
  wrongNumber: boolean;
};

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
  justify-content: center;
`;

export const Board = styled.View`
  width: 300px;
  height: 300px;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Input = styled(TextInput)<InputProps>`
  width: 50px;
  height: 50px;
  border: 1px solid black;
  align-items: center;
  text-align: center;
  font-size: 24px;
  font-weight: bold;

  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ editable, theme }) =>
    editable ? theme.colors.background : 'gray'}; ;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 40px;
`;

export const ButtonText = styled.Text`
  font-size: 24px;
`;

export const Footer = styled.View`
  flex-direction: row;
  width: 300px;
  justify-content: space-between;
`;
