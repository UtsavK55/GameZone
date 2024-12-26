import React from 'react';
import {DimensionValue} from 'react-native';

declare global {
  interface ButtonProps {
    label: React.ReactNode;
    onPress: () => void;
    disabled?: boolean;
    bgColor?: string;
    textColor?: string;
    width?: DimensionValue;
    height?: DimensionValue;
  }
}
