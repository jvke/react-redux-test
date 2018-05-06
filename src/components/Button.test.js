import React from 'react';
import ReactDOM from 'react-dom';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import Button from './Button';
import theme from '../theme';
import { wrapWithTheme } from '../utils/helpers';

import { ThemeProvider } from 'styled-components';

const wrapper = wrapWithTheme(theme);

describe('Button', () => {
  it('Button renders with no props specified', () => {
    const tree = renderer
      .create(
        <Button theme={theme}>MyButton</Button>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Button renders with props specified', () => {
    const tree = renderer
      .create(<Button theme={theme} a={1} b={2} c={3}>MyButton</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
