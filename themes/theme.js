import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#EE6923',
    },
    secondary: {
      main: '#680E2E',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#EAD3C1',
    },
  },
});

export default theme;
