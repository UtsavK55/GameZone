import {StyleSheet} from 'react-native';

import {createThemedStyles} from '@helpers';

export const signupStyles = createThemedStyles((colors, scalingMetrics) => {
  const {scaleSize, moderateScale, wp, hp} = scalingMetrics;
  return StyleSheet.create({
    scrollContent: {
      flexGrow: 1,
    },
    content: {
      flex: 1,
      paddingHorizontal: scaleSize(24),
      justifyContent: 'center',
    },
    logo: {
      width: wp(60),
      height: wp(50),
      alignSelf: 'center',
    },
    title: {
      fontSize: moderateScale(28),
      fontWeight: 'bold',
      color: colors.fixedWhite,
      textAlign: 'center',
      marginBottom: scaleSize(8),
    },
    subtitle: {
      fontSize: moderateScale(16),
      color: colors.gray500,
      textAlign: 'center',
      marginBottom: scaleSize(32),
    },
    form: {
      marginTop: scaleSize(24),
    },
    signupButton: {
      backgroundColor: colors.orange500,
      height: hp(7),
      borderRadius: scaleSize(8),
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: scaleSize(24),
    },
    signupButtonText: {
      color: colors.fixedBlack,
      fontSize: moderateScale(16),
      fontWeight: 'bold',
    },
    loginContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: scaleSize(30)
    },
    loginText: {
      color: colors.gray500,
      fontSize: moderateScale(14),
    },
    loginLink: {
      color: colors.orange500,
      fontSize: moderateScale(14),
      fontWeight: 'bold',
    },
  });
});
