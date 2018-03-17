import React from 'react';

import { Section, SectionContainer, Title, ItemContent, Icon, Subscribe } from './SectionContainer';
import Button, { LinkedBackButton } from './Button';

import Good from '../assets/good.svg';
import Follow from '../assets/follow.svg';
import LevelUp from '../assets/levelUp.svg';

const sections = {
  intro: (
    <div id="profiles-intro">
      <Title>
        <strong>3</strong> bonnes raisons de recruter une Stackerine&nbsp;
      </Title>
      <SectionContainer>
        <ItemContent>
          <Icon src={Good} alt={'good'} />
          <p>Des profils formé sur les technologies et les bonnes pratiques du moment</p>
        </ItemContent>
        <ItemContent>
          <Icon src={LevelUp} alt={'levelUp'} />
          <p>Un profil qui permet d'augmenter le niveau global d'une équipe</p>
        </ItemContent>
        <ItemContent>
          <Icon src={Follow} alt={'follow'} />
          <p>Un suivi et support technique du profil par nos experts</p>
        </ItemContent>
      </SectionContainer>
      <Button linkTo="/profils/details#profiles-details">Plus de détails</Button>
    </div>
  ),

  details: (
    <div id="profiles-details">
      <p>Les Stackerines sont opérationnelles sur les langages et frameworks suivants&nbsp;:</p>
      <ul>
        <li>
          <i className="devicon-javascript-plain" title="JavaScript" />
        </li>
        <li>
          <i className="devicon-react-original-wordmark" title="React" />
        </li>
        <li>
          <i className="devicon-html5-plain-wordmark" title="HTML5" />
        </li>
        <li>
          <i className="devicon-css3-plain-wordmark" title="CSS3" />
        </li>
      </ul>
      <p>Elles sont formées pour utiliser efficacement les outils suivants&nbsp;:</p>
      <ul>
        <li>
          <i className="devicon-git-plain" title="git" />
        </li>
        <li>
          <i className="devicon-atom-original" title="Atom" />
        </li>
        <li>
          <i className="devicon-ubuntu-plain-wordmark" title="Ubuntu / Linux" />
        </li>
        <li>
          <i className="devicon-docker-plain-wordmark" title="Docker" />
        </li>
      </ul>
      <LinkedBackButton linkTo="/programme/intro#profiles-intro">Retour</LinkedBackButton>
      <Button linkTo="/profils/contact#profiles-contact">C'est mon besoin&nbsp;</Button>
    </div>
  ),

  contact: (
    <div id="profiles-contact">
      <p>Entrez votre email et nous vous contacterons pour en discuter...</p>
      <Subscribe method="POST" action="//formspree.io/jsouied@stackerine.com">
        <input type="email" name="email" placeholder="Mon email" required />
        <input type="hidden" name="_subject" value="Need profil" />
        <input type="hidden" name="_next" value="//stackerine.com/thank" />
        <button type="submit">Go&nbsp;!</button>
      </Subscribe>
    </div>
  ),
};

export default ({ match: { params: { section } } } = { match: { params: {} } }) => (
  <Section className="App-body">{sections[section || 'intro']}</Section>
);
