import { ThemeProvider } from '@material-ui/styles';
import Header from '../src/components/header';
import '../styles/globals.css';
import { theme } from '../styles/theme';
import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../src/components/footer';


function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return <ThemeProvider theme={theme}><Header /><Component {...pageProps} /><Footer /></ThemeProvider>
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp