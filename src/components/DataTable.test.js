import React from 'react';
import ReactDOM from 'react-dom';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import DataTable from './DataTable';
import theme from '../theme';
import { wrapWithTheme } from '../utils/helpers';

import { ThemeProvider } from 'styled-components';

const wrapper = wrapWithTheme(theme);

describe('DataTable', () => {
  it('DataTable renders with no props specified', () => {
    const tree = renderer
      .create(
        <DataTable theme={theme}>
          <tbody>
            <tr>
              <td>Foo</td>
              <td>Bar</td>
            </tr>
          </tbody>
        </DataTable>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('DataTable renders with props specified', () => {
    const tree = renderer
      .create(<DataTable theme={theme} a={1} b={2} c={3} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
