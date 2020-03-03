import rebassTheme from '@rebass/preset';
import { lighten, darken } from 'polished';

const colors = {
  primary: '#ffffff',
  secondary: '#CE1A5D',
  background: '#ffffff',
};

const theme = {
  ...rebassTheme,
  fonts: {
    heading: 'Cormorant',
    body: 'Montserrat',
  },
  colors: {
    ...colors,
    secondaryLight: lighten(0.2, colors.secondary),
    secondaryDark: darken(0.2, colors.secondary),
  },
};

export default theme;
