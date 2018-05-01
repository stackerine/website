import React from 'react';
import styled from 'styled-components';
import { Section } from './SectionContainer';
import StephanieAvatar from '../assets/stephanie.svg';
import JonathanAvatar from '../assets/jonathan.svg';

const stephanieData = {
  avatar: StephanieAvatar,
  name: 'Stephanie',
  job: 'CEO',
  experience: '9 ans',
};

const jonathanData = {
  avatar: JonathanAvatar,
  name: 'Jonathan',
  job: 'CTO',
  experience: '10 ans',
};

const ProfilesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const Avatar = styled.img`
  max-width: 55%;
`;

const Profil = ({ profil: { avatar, name, job, experience } }) => (
  <div style={{ padding: '20px' }}>
    <div>
      <Avatar src={avatar} alt={name} />
      <div>{job}</div>
      <div>{name}</div>
      <div>{experience} d'expérience</div>
    </div>
  </div>
);

const Ampersand = styled.h1`
  font-size: 100px;
`;

const Team = () => (
  <Section>
    <div>
      <h1>Qui sommes-nous ?</h1>
      <ProfilesContainer>
        <Profil profil={stephanieData} />
        <span>
          <Ampersand>&</Ampersand>
        </span>
        <Profil profil={jonathanData} />
      </ProfilesContainer>
    </div>
  </Section>
);

export default Team;
