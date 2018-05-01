import React from 'react';
import styled from 'styled-components';
import { Section } from './SectionContainer';

const Container = styled.div`
  padding: 20px;
`;

const Contact = () => (
  <Section>
    <div>
      <Container>
        <h1>Pour nous joindre</h1>
        <span>jsouied[@]stackerine.com</span>
      </Container>
      <Container>
        <h1>Nos locaux</h1>
        <span>En cours de négociation</span>
      </Container>
    </div>
  </Section>
);

export default Contact;
