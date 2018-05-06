import React from 'react';
import ReactDOM from 'react-dom';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import Alert, { ErrorAlert } from './Alert';
import theme from '../theme';


describe('Alert', () => {
  it('renders with no props specified', () => {
    const tree = renderer
      .create(<Alert theme={theme} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with props specified', () => {
    const tree = renderer
      .create(<Alert theme={theme} a={1} b={2} c={3} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders error alerts correctly', () => {
    const tree = renderer
      .create(<ErrorAlert theme={theme} a={1} b={2} c={3} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})
