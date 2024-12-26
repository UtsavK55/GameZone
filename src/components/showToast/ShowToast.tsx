import React from 'react';
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';

import {toastStyles} from './styles';

const toastConfig = {
  success: (props: any) => {
    const styles = toastStyles();

    return (
      <BaseToast
        {...props}
        style={styles.successContainer}
        contentContainerStyle={styles.contentContainer}
        text1Style={styles.text1}
        text2Style={styles.text2}
      />
    );
  },
  error: (props: any) => {
    const styles = toastStyles();

    return (
      <ErrorToast
        {...props}
        style={styles.errorContainer}
        contentContainerStyle={styles.contentContainer}
        text1Style={styles.text1}
        text2Style={styles.text2}
      />
    );
  },
};

export const CustomToast: React.FC = () => <Toast config={toastConfig} />;

const ShowToast = (
  type: 'success' | 'error',
  title: string,
  message: string,
) => {
  Toast.show({
    type,
    text1: title,
    text2: message,
    position: 'top',
    visibilityTime: 4000,
    autoHide: true,
    topOffset: 60,
  });
};

export default ShowToast;
