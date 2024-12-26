import {useMemo} from 'react';
import {Animated, Platform} from 'react-native';

import {emailRegex, passwordRegex} from '@constants';
import useScalingMetrics from '@hooks/useScalingMetrics';
import {useThemeColors} from '@theme/index';

export const isAndroid = Platform.OS === 'android';

export const createThemedStyles = <T extends NamedStyles<T> | NamedStyles<any>>(
  styleFunction: ThemedStyleFunction<T>,
) => {
  return () => {
    const themeColors = useThemeColors();
    const scalingMetrics = useScalingMetrics();

    return useMemo(
      () => styleFunction(themeColors, scalingMetrics),
      [themeColors, scalingMetrics],
    );
  };
};

export const truncateText = (text: string, maxLength: number): string => {
  return text?.length > maxLength ? text.slice(0, maxLength) + '...' : text;
};

export const validateEmail = (email: string) => {
  if (!email) return 'Email is required';
  if (!emailRegex.test(email)) return 'Invalid email format';
  return '';
};

export const validatePassword = (password: string) => {
  if (!password) return 'Password is required';
  if (!passwordRegex.test(password))
    return 'Entered password does not match the password format.';
  return '';
};

export const validateUsername = (username: string) => {
  if (!username) return 'Username is required';
  if (username.length < 3) return 'Username must be at least 3 characters';
  return '';
};

export const startAnimation = (
  anim: Animated.Value,
  toValue: number,
  duration: number,
  useNativeDriver?: boolean,
  afterAnim?: () => void,
) => {
  Animated.timing(anim, {
    toValue: toValue,
    duration: duration,
    useNativeDriver: useNativeDriver ?? true,
  }).start(afterAnim ? () => afterAnim() : () => {});
};

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
}
