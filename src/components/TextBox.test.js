import React from 'react';
import ReactDOM from 'react-dom';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import TextBox from './TextBox';

describe('TextBox', () => {
  it('Textbox renders with no props specified', () => {
    const tree = renderer
      .create(<TextBox />)
      .toJSON();
    expect(tree).toHaveStyleRule('outline', 'none', { modifier: ':focus' })
    expect(tree).toMatchSnapshot();
  });

  it('Textbox renders with props specified', () => {
    const tree = renderer
      .create(<TextBox a={1} b={2} c={3} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
