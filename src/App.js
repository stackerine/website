import React, { Component } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import AppHeader from './components/Header';
import AppHome from './components/Home';
import Program from './components/Program';
import Profiles from './components/Profiles';
import AppFooter from './components/Footer';
import { ThankCandidate, ThankRecrute } from './components/Thanks';
import withFade from './components/Fade.jsx';

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(rgba(25, 181, 254, 0.6), rgba(246, 36, 89, 0.6)),
    linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/assets/photo-1441015401724-70d16b783f5c-min.jpeg');
  background-size: cover;
  font-family: 'Roboto', 'Arial';
  color: #f5f7fa;
  height: 100%;
  overflow: auto;

  @media (max-width: 700px) {
    background: linear-gradient(rgba(25, 181, 254, 0.6), rgba(246, 36, 89, 0.6)),
      linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
  }
`;

class App extends Component {
  render() {
    return (
      <Div>
        <AppHeader />
        <Route exact path="/" component={AppHome} />
        <Route path="/programme/:section" component={withFade(Program)} />
        <Route path="/profils/:section" component={withFade(Profiles)} />
        <Route path="/merci" component={ThankCandidate} />
        <Route path="/thank" component={ThankRecrute} />
        <AppFooter />
      </Div>
    );
  }
}

export default App;
