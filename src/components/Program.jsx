import React from 'react';

import { Section, SectionContainer, Title, ItemContent, Icon, Subscribe } from './SectionContainer';
import Button, { LinkedBackButton } from './Button';
import Dollar from '../assets/dollar.svg';
import Career from '../assets/career.svg';
import Web from '../assets/web.svg';
import WomanLess from '../assets/womanLess.svg';
import WomanLooking from '../assets/womanLooking.svg';
import WomanPower from '../assets/womanPower.svg';
import Cdi from '../assets/cdi.svg';
import Learning from '../assets/learning.svg';
import Meeting from '../assets/meeting.svg';
import Growing from '../assets/growing.svg';
import Workgroup from '../assets/workGroup.svg';
import Mission from '../assets/mission.svg';

const sections = {
  intro: (
    <div id="profil-intro">
      <Title>Votre profil</Title>
      <SectionContainer>
        <ItemContent>
          <Icon src={Career} alt={'career'} />
          <p>Vous en avez assez d’être sous-payé et vous voulez avoir une vraie carrière&nbsp;?</p>
        </ItemContent>
        <ItemContent>
          <Icon src={Dollar} alt={'dollar'} />
          <p>Vous voulez vous investir dans un secteur qui ne connaît pas la crise&nbsp;?</p>
        </ItemContent>
        <ItemContent>
          <Icon src={Web} alt={'web'} />
          <p>Parce que le secteur de l’IT vous concerne aussi&nbsp;!</p>
        </ItemContent>
      </SectionContainer>
      <Button linkTo="/programme/faits#profil-faits">Dites m'en plus</Button>
    </div>
  ),

  faits: (
    <div id="profil-faits">
      <Title>Notre constat</Title>
      <SectionContainer>
        <ItemContent>
          <Icon src={WomanLess} alt={'woman less'} />
          <p>Les femmes sont sous-représentées dans l’IT</p>
        </ItemContent>
        <ItemContent>
          <Icon src={WomanLooking} alt={'woman looking'} />
          <p>Les recruteurs recherchent des femmes qualifiées</p>
        </ItemContent>
        <ItemContent>
          <Icon src={WomanPower} alt={'woman power'} />
          <p>Les femmes disposent d’autant de capacités que les hommes</p>
        </ItemContent>
      </SectionContainer>
      <LinkedBackButton linkTo="/programme/intro#profil-intro">Retour</LinkedBackButton>
      <Button linkTo="/programme/process#profil-process">Et du coup&nbsp;?</Button>
    </div>
  ),

  process: (
    <div id="profil-process">
      <Title>Le processus</Title>
      <SectionContainer>
        <ItemContent>
          <Icon src={Meeting} alt={'meeting'} />
          <p>Nous nous rencontrons pour discuter de votre parcours, de vos attentes et de vos envies.</p>
        </ItemContent>
        <ItemContent>
          <Icon src={Learning} alt={'learning'} />
          <p>Si cela fonctionne, nous vous formons pendant 100 jours au métier de développeur web.</p>
        </ItemContent>
        <ItemContent>
          <Icon src={Cdi} alt={'cdi'} />
          <p>Tout cela avec une embauche en CDI qui intervient dès le début de la formation.</p>
        </ItemContent>
      </SectionContainer>
      <LinkedBackButton linkTo="/programme/faits#profil-faits">Retour</LinkedBackButton>
      <Button linkTo="/programme/missions#profil-missions">Et ensuite&nbsp;?</Button>
    </div>
  ),

  missions: (
    <div id="profil-missions">
      <Title>Une fois formée</Title>
      <SectionContainer>
        <ItemContent>
          <Icon src={Workgroup} alt={'Work group'} />
          <p>La formation vous prépare à travailler dans une mission au sein d'une équipe.</p>
        </ItemContent>
        <ItemContent>
          <Icon src={Mission} alt={'Mission'} />
          <p>Nous sélectionnons des missions de qualités en prestation pour des clients.</p>
        </ItemContent>
        <ItemContent>
          <Icon src={Growing} alt={'growing'} />
          <p>Nous faisons un suivi régulier de l'évolution technique et salariale.</p>
        </ItemContent>
      </SectionContainer>
      <LinkedBackButton linkTo="/programme/process#profil-process">Retour</LinkedBackButton>
      <Button linkTo="/programme/inscription#profil-inscription">En savoir plus...&nbsp;</Button>
    </div>
  ),

  inscription: (
    <div id="profil-inscription">
      <p>Entrez votre email et nous vous contacterons pour en discuter...</p>
      <Subscribe method="POST" action="//formspree.io/jsouied@stackerine.com">
        <input type="email" name="email" placeholder="Mon email" required />
        <input type="hidden" name="_subject" value="New candidate" />
        <input type="hidden" name="_next" value="//stackerine.com/merci" />
        <button type="submit">Go&nbsp;!</button>
      </Subscribe>
    </div>
  ),
};

export default ({ match: { params: { section } } } = { match: { params: {} } }) => (
  <Section className="App-body">{sections[section || 'intro']}</Section>
);
