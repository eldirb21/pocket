module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          // components
          '@atoms': './src/components/atoms',
          '@molecules': './src/components/molecules',

          // assets
          '@icons': './src/assets/icons',
          '@images': './src/assets/images',

          // constants
          '@constants': './src/constants',

          // helpers
          '@helpers': './src/helpers',

          // hooks
          '@hooks': './src/hooks', // Updated from array to string

          // navigate
          '@nav': './src/nav',

          // pages
          '@pages': './src/pages',

          // services
          '@services': './src/services',

          // utils
          '@utils': './src/utils',

          // stores
          '@stores': './src/stores',
        },
      },
    ],
  ],
};
