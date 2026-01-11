import { ThemeProvider } from 'styled-components';
import { FontStyles } from '../styles/fonts';
import { theme } from '../styles/theme';

import './global.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <FontStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
