import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logo from '../stackerine-logo.svg';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
  width: 80%;
  box-shadow: 0 1px 0 rgba(211, 214, 219, 0.3);

  & img {
    height: auto;
    max-width: 100%;
  }

  @media (max-width: 700px) {
    justify-content: center;

    nav {
      display: none;
    }
  }
`;

const NavItem = styled.li`
  display: inline;
  margin: 20px;
  font-size: 20px;
  list-style: none;
  text-transform: uppercase;

  & a {
    color: inherit;
    text-decoration: none;
  }
`;

export default () => (
  <Header>
    <Link to="/">
      <img src={logo} alt="logo" />
    </Link>
    <nav>
      <ul>
        <NavItem>
          <Link to="/programme/intro">Programme</Link>
        </NavItem>
        <NavItem>
          <Link to="/profils/intro">Profils</Link>
        </NavItem>
      </ul>
    </nav>
  </Header>
);
