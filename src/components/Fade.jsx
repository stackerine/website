import React from 'react';
import { Transition } from 'react-transition-group';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-out`,
  opacity: 0,
  flex: 1,
  display: 'flex',
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
};

const withFade = Wrapped => props => (
  <Transition in timeout={duration} appear>
    {state => (
      <div
        style={{
          ...defaultStyle,
          ...transitionStyles[state],
        }}
      >
        <Wrapped {...props} />
      </div>
    )}
  </Transition>
);

export default withFade;
