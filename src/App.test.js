import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import theme from './theme';
import { ThemeProvider } from 'styled-components';
import App from './App';
jest.mock('./redux/index');
import * as reduxIndex from './redux/index';
describe('App', () => {
  it('renders without crashing', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      )
      .toJSON();
  });
})

