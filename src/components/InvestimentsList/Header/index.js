import React from 'react';

import { Container, Title } from './styles';

import YellowLine from '~/components/InvestimentsList/YellowLine';

export default function Header() {
  return (
    <>
      <YellowLine />
      <Container>
        <Title>Investimentos</Title>
        <Title>R$</Title>
      </Container>
    </>
  );
}
