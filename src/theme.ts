import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// import Konnect from './fonts/Konnect-Regular.otf';

// const konnect = {
//   fontFamily: 'Konnect',
//   fontStyle: 'regular',
//   fontDisplay: 'swap',
//   fontWeight: '400',
//   src: `
//    local('Konnect'),
//    local('Konnect-Regular'),
//    url(${Konnect}) format('otf')
//  `,
//   unicodeRange:
//     'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
// };

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: ['Konnect', '"Open Sans"', 'Roboto'].join(','),
    body2: {
      color: '#525F7B',
    },
    caption: {
      color: '#525F7B',
    },
  },
  shape: {
    borderRadius: 0, // defaults to 4
  },
  // overrides: {
  //   MuiCssBaseline: {
  //     '@global': {
  //       '@font-face': [konnect],
  //     },
  //   },
  // },
  palette: {
    primary: {
      main: '#1F6DC9',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
