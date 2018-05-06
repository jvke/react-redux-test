import React from 'react';
import styled from 'styled-components';
import { darken, lighten, transparentize } from 'polished';

const Alert = ({ children, ...otherProps }) => (
  <p {...otherProps}>{children}</p>
);

const StyledAlert = styled(Alert)`
  border: solid 3px ${props => lighten(0.05, props.theme.brand.light)};
  padding: 10px 20px;
  background: ${props => transparentize(0.3, darken(0.1, props.theme.brand.light))};
  color: ${props => props.theme.textColor};
  border-radius: 4px;
`;


const ErrorAlert = StyledAlert.extend`
  border: solid 3px ${props => darken(0.1, props.theme.alert.error)};
  background: ${props => transparentize(0.3, darken(0.3, props.theme.alert.error))}
`;

export default StyledAlert;
export { ErrorAlert };
