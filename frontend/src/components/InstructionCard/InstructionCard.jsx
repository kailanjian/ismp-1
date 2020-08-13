import Header from 'layout/Header';
import React from 'react';
import Markdown from 'react-remarkable';
import { Icon } from 'semantic-ui-react';

import { Container, IconWrapper, Instruction } from './InstructionCard.styles';

const InstructionCard = ({ instruction }) => {
  const { icon, title, blurb } = instruction;

  return (
    <Container>
      <IconWrapper>
        <Icon circular name={icon} size="huge" inverted color="yellow" />
      </IconWrapper>
      <Header size="h3" font="sans">
        {title}
      </Header>
      <Instruction>
        <Markdown>{blurb}</Markdown>
      </Instruction>
    </Container>
  );
};

export default InstructionCard;
