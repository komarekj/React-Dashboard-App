import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ShopifyApp from '../ShopifyApp/ShopifyApp';
import { Header, Content } from '../Common';
import Sidebar from '../Sidebar/Sidebar';
import store from '../../redux/store';
import theme from './theme';

const useStyles = makeStyles({
  mainContent: {
    display: 'flex',
    paddingTop: '4rem',
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <Router>
          <ShopifyApp>
            <Header />
            <div className={classes.mainContent}>
              <Sidebar />
              <Content />
            </div>
          </ShopifyApp>
        </Router>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
