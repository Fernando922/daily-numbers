import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  height: 80%;
  width: 90%;
  align-self: center;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
  border-radius: 16px;
  padding-top: 48px;
`;

export const Content = styled.View`
  flex: 4;
  width: 100%;
  flex-direction: row;
`;

export const Scroll = styled(ScrollView)`
  flex: 4;
`;

export const Column = styled.View`
  flex: 1;
  align-items: center;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 14px;
`;

export const Value = styled.Text`
  margin-bottom: 8px;
`;

export const Footer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const CloseButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})``;

export const CloseButtonText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary};
`;
