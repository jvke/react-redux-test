import React from 'react';
import styled from 'styled-components';

const NotFound = (props) => (
    <p className={props.className}>404 - Page not found</p>
);

export default styled(NotFound)`
  text-align: center;
  font-size: 36px;
`;
