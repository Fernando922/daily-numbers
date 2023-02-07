import Snackbar from 'react-native-snackbar';

const snackbarMessage = (
  text: string,
  onPress?: () => void,
  buttonText?: string,
) => {
  if (!onPress) {
    Snackbar.show({
      text,
    });
  } else {
    Snackbar.show({
      action: {
        onPress,
        text: buttonText || 'OK',
        textColor: 'green',
      },
      duration: Snackbar?.LENGTH_INDEFINITE,
      text,
    });
  }
};

export default snackbarMessage;
