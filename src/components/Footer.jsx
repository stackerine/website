import React from 'react';
import styled from 'styled-components';

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

export default () => (
  <Footer>
    <p>Powered with &#9829; by React</p>
    <p>Copyright 2018 Stackerine</p>
  </Footer>
);
