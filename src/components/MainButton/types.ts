import { StyleProp, ViewStyle } from 'react-native';

export type Props = {
  title: string;
  onPress: () => void;
  viewStyle?: StyleProp<ViewStyle>;
};
