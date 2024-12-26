import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {styles} from './styles';

export const GradientBackground: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  return (
    <LinearGradient
      colors={['#000000', '#111111', '#222222']}
      style={styles.gradient}>
      {children}
    </LinearGradient>
  );
};
