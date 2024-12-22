import {useAppSelector} from '@store';
import {StyleSheet} from 'react-native';

export const useThemeColors = () => {
  const isDark = useAppSelector(state => state.theme.isDark);

  const colorsLight: Colors = {
    red500: '#FF0000',
    fixedGray800: '#6a6a6a',
    gray800: '#333333',
    gray600: '#666666',
    gray500: '#888888',
    gray400: '#bdbdbd',
    gray300: '#d1d1d1',
    gray200: '#e3e3e3',
    gray100: '#f0f0f0',
    gray50: '#f7f7f7',
    white: '#FFFFFF',
    fixedWhite: '#FFFFFF',
    black: '#000000',
    fixedBlack: '#000000',
    orange700: '#cc6702',
    orange600: '#fa8900',
    orange500: '#ffa30a',
    orange400: '#ffbb32',
    green600: '#158016',
    transparent: 'rgba(0, 0, 0, 0.5)',
    blue500: '#1eaaf1',
    yellow500: '#FFD700',
  } as const;

  const colorsDark: Colors = {
    red500: '#FF0000',
    fixedGray800: '#6a6a6a',
    gray800: '#f7f7f7',
    gray600: '#d1d1d1',
    gray500: '#aaaaaa',
    gray400: '#888888',
    gray300: '#666666',
    gray200: '#333333',
    gray100: '#222222',
    gray50: '#1a1a1a',
    white: '#2A2A2A',
    fixedWhite: '#FFFFFF',
    black: '#FFFFFF',
    fixedBlack: '#000000',
    orange700: '#cc6702',
    orange600: '#ffbb32',
    orange500: '#ffa30a',
    orange400: '#fa8900',
    green600: '#1ebd1e',
    transparent: 'rgba(255, 255, 255, 0.1)',
    blue500: '#3bbfff',
    yellow500: '#FFD700',
  } as const;

  return isDark ? colorsDark : colorsLight;
};

export const fontSize = {
  xs: 12,
  s: 14,
  m: 16,
  l: 22,
  xl: 28,
  '2xl': 32,
  '3xl': 40,
};

export const gutters = {
  xs: 2,
  s: 4,
  m: 8,
  l: 12,
  xl: 16,
  '2xl': 20,
  '3xl': 24,
  '4xl': 32,
  '5xl': 40,
};

export const layout = StyleSheet.create({
  col: {
    flexDirection: 'column',
  },
  colReverse: {
    flexDirection: 'column-reverse',
  },
  wrap: {
    flexWrap: 'wrap',
  },
  row: {
    flexDirection: 'row',
  },
  rowReverse: {
    flexDirection: 'row-reverse',
  },
  itemsCenter: {
    alignItems: 'center',
  },
  itemsStart: {
    alignItems: 'flex-start',
  },
  itemsStretch: {
    alignItems: 'stretch',
  },
  itemsEnd: {
    alignItems: 'flex-end',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyAround: {
    justifyContent: 'space-around',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  /* Sizes Layouts */
  flex_1: {
    flex: 1,
  },
  fullWidth: {
    width: '100%',
  },
  fullHeight: {
    height: '100%',
  },
  /* Positions */
  relative: {
    position: 'relative',
  },
  absolute: {
    position: 'absolute',
  },
  top0: {
    top: 0,
  },
  bottom0: {
    bottom: 0,
  },
  left0: {
    left: 0,
  },
  right0: {
    right: 0,
  },
  z1: {
    zIndex: 1,
  },
  z10: {
    zIndex: 10,
  },
});
