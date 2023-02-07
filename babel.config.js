module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: ['BASE_URL'],
        safe: false,
        allowUndefined: true,
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@contexts': './src/contexts',
          '@icons': './src/assets/icons',
          '@images': './src/assets/images',
          '@animations': './src/assets/animations',
          '@services': './src/services',
          '@theme': './src/theme',
          '@utils': './src/utils',
          '@screens': './src/screens',
          '@hooks': './src/hooks',
          '@routes': './src/routes,',
          '@mocks': './src/__mocks__',
        },
      },
    ],
  ],
};
