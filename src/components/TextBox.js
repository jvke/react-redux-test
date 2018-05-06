import React from 'react';
import styled from 'styled-components';

const TextBox = (props) => (
  <input {...props} type="text" />
);

export default styled(TextBox)`
  &:focus {
    outline: none;
  }
`;
