import rebassTheme from '@rebass/preset';
import { lighten, darken } from 'polished';

const colors = {
  red: '#C1273D',
  pink: '#CE1A5D',
};

const themeColors = {
  primary: '#ffffff',
  secondary: colors.pink,
  background: '#ffffff',
};

const fonts = {
  serif: 'Cormorant Garamond',
  'sans-serif': 'Roboto',
};

const theme = {
  ...rebassTheme,
  fonts: {
    heading: fonts.serif,
    body: fonts['sans-serif'],
    ...fonts,
  },
  fontWeights: {
    body: 400,
    heading: 400,
    bold: 500,
  },
  colors: {
    ...themeColors,
    secondaryLight: lighten(0.2, themeColors.secondary),
    secondaryLighter: lighten(0.1, themeColors.secondary),
    secondaryDarker: darken(0.1, themeColors.secondary),
    secondaryDark: darken(0.2, themeColors.secondary),
  },
  buttons: {
    primary: {
      fontFamily: 'body',
      bg: 'secondary',
      color: 'primary',
      ':active': { bg: 'secondaryLighter' },
    },
  },
};

export default theme;
