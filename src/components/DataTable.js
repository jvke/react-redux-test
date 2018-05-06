import React from 'react';
import styled from 'styled-components';
import { lighten, transparentize, darken } from 'polished';


const DataTable = ({ children, ...otherProps }) => (
  <table {...otherProps}>
    {children}
  </table>
);

export default styled(DataTable)`
  & {
    margin: 0 auto;
    border-collapse: collapse;
    border: solid 1px ${props => lighten(0.5, props.theme.brand.light)};
    border-radius: 4px;
    background: ${props => transparentize(0.7, lighten(0.2, props.theme.brand.light))};
    padding: 10px;

    th {
      background: ${props => transparentize(0.5, darken(0.1, props.theme.brand.light))};
    }
    td, th {
      padding: 5px;
    }
    tr td {
      border-top: solid 1px ${props => lighten(0.5, props.theme.brand.light)};
    }
  }

`
