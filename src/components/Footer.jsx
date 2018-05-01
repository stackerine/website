import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  opacity: 0.5;
  box-shadow: 0 -1px 0 rgba(211, 214, 219, 0.3);

  @media (max-width: 700px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: inherit;
  }
  padding: 0 10px;
`;

export default () => (
  <Footer>
    <div>
      <span>Powered with &#9829; by React</span>
      <StyledLink to="/team#team">Team</StyledLink>
      <StyledLink to="/contact#contact">Contact</StyledLink>
    </div>
    <p>Copyright 2018 Stackerine</p>
  </Footer>
);
