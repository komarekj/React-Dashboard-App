import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: red,
  },
  sidebar: {
    width: '15rem',
  },
});

export default theme;
