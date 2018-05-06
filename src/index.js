import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, injectGlobal } from 'styled-components';
import { normalize } from 'polished';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import theme from './theme';

// Normalize user agent styles across browsers
// since styled-components does not support theme provider in inject globals
// we will get the values from the theme object itself
// See WIP PR https://github.com/styled-components/styled-components/issues/793
// no linear gradients with polished yet
// https://github.com/styled-components/polished/issues/284
// so vendor specific rules are added here
injectGlobal`
  ${normalize()}
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400|Source+Serif+Pro');

  /* .font-sans {
    font-family: 'Source Sans Pro', sans-serif;
  }

  .font-serif {
    font-family: 'Source Serif Pro', serif;
  } */

  body {
    font-family: 'Source Sans Pro', serif;
    background: ${theme.backgroundStart};
    background: linear-gradient(295deg, ${theme.brand.light}, ${theme.brand.dark}) fixed;
    background: -webkit-linear-gradient(295deg, ${theme.brand.light}, ${theme.brand.dark}) fixed;
    background: -moz-linear-gradient(295deg, ${theme.brand.light}, ${theme.brand.dark}) fixed;
    background: -o-linear-gradient(295deg, ${theme.brand.light}, ${theme.brand.dark}) fixed;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
`

ReactDOM.render(
<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>
, document.getElementById('root'));
registerServiceWorker();
