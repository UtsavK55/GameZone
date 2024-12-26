import React from 'react';
import {Text, TextStyle} from 'react-native';

import {fontFamily} from '@theme';

export const CustomText: React.FC<CustomTextProps> = ({
  children,
  style,
  weight = 'normal',
  italic = false,
  ...props
}) => {
  const fontStyle: TextStyle = {
    fontFamily: italic ? `${fontFamily[weight]}-Italic` : fontFamily[weight],
  };

  return (
    <Text style={[fontStyle, style]} {...props}>
      {children}
    </Text>
  );
};
