import React from 'react';
import ReactDOM from 'react-dom';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import Nav from './Nav';
import theme from '../theme';
import { MemoryRouter } from 'react-router-dom';

describe('Nav', () => {
  it('Nav renders with no props specified', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Nav theme={theme} />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

})
