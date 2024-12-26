import {StyleSheet} from 'react-native';

import {createThemedStyles} from '@helpers';

export const loginStyles = createThemedStyles((colors, scalingMetrics) => {
  const {scaleSize, moderateScale, wp, hp} = scalingMetrics;
  return StyleSheet.create({
    scrollContent: {
      flexGrow: 1,
    },
    content: {
      flex: 1,
      padding: scaleSize(24),
      justifyContent: 'center',
    },
    logo: {
      width: wp(60),
      height: wp(50),
      alignSelf: 'center',
    },
    title: {
      fontSize: moderateScale(32),
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
    forgotPassword: {
      alignSelf: 'flex-end',
      marginBottom: scaleSize(24),
    },
    forgotPasswordText: {
      color: colors.orange500,
      fontSize: moderateScale(14),
    },
    loginButton: {
      height: hp(56),
      borderRadius: scaleSize(8),
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: scaleSize(24),
    },
    signupContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: scaleSize(32),
    },
    signupText: {
      color: colors.gray500,
      fontSize: moderateScale(14),
    },
    signupLink: {
      color: colors.orange500,
      fontSize: moderateScale(14),
      fontWeight: 'bold',
    },
  });
});
