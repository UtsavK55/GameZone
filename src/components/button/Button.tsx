import React from 'react';
import {TouchableOpacity} from 'react-native';
import CustomText from '@components/customText';
import {useThemeColors} from '@theme';

import {styles} from './styles';
import useScalingMetrics from '@hooks/useScalingMetrics';

const Button: React.FC<ButtonProps> = ({
  label,
  onPress,
  disabled = false,
  bgColor,
  textColor = '#000000',
  width,
  height,
}) => {
  const colors = useThemeColors();
  const {wp, scaleSize} = useScalingMetrics();
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: bgColor ?? colors.orange500,
          width: width ?? wp(87),
          height: height ?? scaleSize(45),
          opacity: disabled ? 0.5 : 1,
        },
      ]}
      onPress={onPress}
      disabled={disabled}>
      <CustomText
        style={[styles.text, {color: textColor ?? colors.fixedBlack}]}>
        {label}
      </CustomText>
    </TouchableOpacity>
  );
};

export default Button;
