module.exports = {
  presets: [
    'module:@react-native/babel-preset', // For React Native
  ],
  plugins: [
    'react-native-reanimated/plugin', // Required by react-native-reanimated
    [
      'module-resolver', // Custom path aliases
      {
        alias: {
          '@src': './src',
          '@config': './src/config',
          '@helpers': './src/helpers',
          '@network': './src/network',
          '@theme': './src/theme',
          '@assets': './src/assets',
          '@constants': './src/constants',
          '@hooks': './src/hooks',
          '@screens': './src/screens',
          '@components': './src/components',
          '@contexts': './src/contexts',
          '@navigation': './src/navigation',
          '@storage': './src/storage',
          '@store': './src/store',
          '@types': './src/types',
        },
      },
    ],
    [
      'module:react-native-dotenv', // To use environment variables
      {
        moduleName: '@env',
        path: '.env',
      },
    ],
  ],
};
