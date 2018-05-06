import { ThemeProvider } from 'styled-components';
import React from 'react';
const wrapWithTheme = (theme) => {
  return (children) => (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export { wrapWithTheme }
