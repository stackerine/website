import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Button from './Button';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 1;
  text-align: center;
  font-weight: 900;
  text-align: center;
  line-height: 1.5;

  p {
    font-family: 'Press Start 2P', cursive;
    padding: 0 10px;
  }

  @media (min-width: 400px) {
    p {
      font-size: 20px;
    }
  }

  @media (min-width: 500px) {
    p {
      font-size: 26px;
    }
  }

  @media (min-width: 700px) {
    p {
      font-size: 40px;
    }
  }
`;

const BottomLink = styled.footer`
  font-size: 12px;

  a {
    color: white;
  }
`;

export default () => (
  <Section className="App-body">
    <p>Changez de vie en devenant développeuse web&nbsp;!</p>
    <Button linkTo="/programme/intro">Ça m'intéresse</Button>
    <BottomLink>
      <Link to="/profils/intro">Je recherche des profils pour une mission</Link>
    </BottomLink>
  </Section>
);
