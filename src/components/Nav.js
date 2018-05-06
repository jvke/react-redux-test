import React from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';
import { Link } from 'react-router-dom';

const Nav = (props) => (
  <div className={props.className}>
    <Link className='logo' to='/'>GitSearch</Link>
    <div className="nav-right">
      <a>D3 demo (coming soon)</a>
    </div>
  </div>
);

export default styled(Nav)`
  overflow: hidden;
  padding: 15px 10px;

  .logo {
    color: ${props => props.theme.textColor};
    text-decoration: none;
    font-size: 24px;
    font-family: 'Source Serif Pro', serif;
  }

  .nav-right {
    float: right;

    & a {
      padding: 0px 10px;
      color: ${props => transparentize(0.2, props.theme.textColor)}
    }
  }
`;
