import { StyleSheet } from 'react-native';

import { createThemedStyles } from '@helpers';

export const formInputStyles = createThemedStyles((colors, scalingMetrics) => {
  const { scaleSize, moderateScale, wp, hp } = scalingMetrics;
  return StyleSheet.create({
    container: {
      marginBottom: scaleSize(20),
    },
    label: {
      position: 'absolute',
      left: scaleSize(16),
      zIndex: 1,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      height: scaleSize(56),
      paddingHorizontal: scaleSize(16),
      borderWidth: 1,
      borderColor: colors.gray200,
      borderRadius: scaleSize(8),
      color: colors.fixedWhite,
      backgroundColor: colors.gray100,
      flex: 1,
      paddingTop: scaleSize(16),
    },
    focusedInput: {
      borderColor: colors.orange500,
    },
    errorInput: {
      borderColor: colors.red500,
    },
    errorText: {
      color: colors.red500,
      fontSize: moderateScale(12),
      marginTop: scaleSize(4),
      marginLeft: scaleSize(16),
    },
    eyeIcon: {
      position: 'absolute',
      right: scaleSize(16),
    },
    errorColor: {
      color: colors.red500,
    },
    placeholderColor: {
      color: colors.gray500,
    },
  });
});
