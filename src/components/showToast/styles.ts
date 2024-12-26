import {StyleSheet} from 'react-native';

import {createThemedStyles} from '@helpers';

export const toastStyles = createThemedStyles((colors, scalingMetrics) => {
  const {scaleSize, moderateScale} = scalingMetrics;

  return StyleSheet.create({
    successContainer: {
      borderLeftColor: colors.green600,
    },
    errorContainer: {
      borderLeftColor: colors.red500,
    },
    contentContainer: {
      paddingHorizontal: scaleSize(15),
    },
    text1: {
      fontSize: moderateScale(15),
      fontWeight: '400',
      color: colors.gray100,
    },
    text2: {
      fontSize: moderateScale(13),
      color: colors.gray500,
    },
  });
});
