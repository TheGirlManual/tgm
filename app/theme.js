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

const theme = {
  ...rebassTheme,
  fonts: {
    heading: 'Cormorant',
    body: 'Montserrat',
  },
  colors: {
    ...themeColors,
    secondaryLight: lighten(0.2, themeColors.secondary),
    secondaryDark: darken(0.2, themeColors.secondary),
  },
};

export default theme;
