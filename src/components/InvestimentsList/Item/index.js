import React from 'react';

import {
  Container,
  ContainerTitle,
  ContainerValue,
  Title,
  SubTitle,
  Value,
} from './styles';

export default function Item({ title, subTitle, value }) {
  return (
    <Container>
      <ContainerTitle>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </ContainerTitle>
      <ContainerValue>
        <Value>{value}</Value>
      </ContainerValue>
    </Container>
  );
}
