import React from 'react';
import styled from 'styled-components';
import { lighten, darken, adjustHue } from 'polished';

const Button = ({ children, ...otherProps }) => (
  <button {...otherProps}>{children}</button>
);

export default styled(Button)`
  &:focus {
    outline: none;
  }
  border: none;
  color: ${props => darken(0.1, props.theme.textColor)};
  border-radius: 4px;
  background: -webkit-gradient(linear, left top, right top, from(${props => lighten(0.3, adjustHue(50, props.theme.brand.light))}), to(${props => lighten(0.1, adjustHue(75, props.theme.brand.light))}));
  background: -moz-linear-gradient(linear, left top, right top, from(${props => lighten(0.3, adjustHue(50, props.theme.brand.light))}), to(${props => lighten(0.1, adjustHue(75, props.theme.brand.light))}));
  background: -o-linear-gradient(linear, left top, right top, from(${props => lighten(0.3, adjustHue(50, props.theme.brand.light))}), to(${props => lighten(0.1, adjustHue(75, props.theme.brand.light))}));
  padding: 5px 10px;
  &:hover {
    cursor: pointer;
  }
`;
