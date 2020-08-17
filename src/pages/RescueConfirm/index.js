import React, { useState } from 'react';

import {
  Container,
  InfoContainer,
  Title,
  Desc,
  ButtonRescue,
  ButtonRescueText,
} from './styles';
import ListHeader from '~/components/InvestimentsList/Header';

import RescueItem from '~/components/RescueConfirm/RescueItem';

export default function RescueConfirm({ route }) {
  const investData = route.params;
  console.log('params', investData);

  const [buttonDisabled, setButtonDisabled] = useState(true);

  return (
    <Container>
      <ListHeader leftTitle="Dados do investimento" rightTitle="" />
      <InfoContainer>
        <Title>Nome</Title>
        <Desc>{investData.nome}</Desc>
      </InfoContainer>
      <InfoContainer>
        <Title>Saldo total disponível</Title>
        <Desc>
          {investData.saldoTotalDisponivel.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </Desc>
      </InfoContainer>
      <ListHeader
        leftTitle="Resgate do seu jeito"
        rightTitle=""
        renderBottomLine={false}
      />
      {investData.acoes.map((investItem) => (
        <RescueItem
          rescueData={investItem}
          total={investData.saldoTotalDisponivel}
        />
      ))}
      <ButtonRescue disabled={buttonDisabled}>
        <ButtonRescueText>CONFIRMAR RESGATE</ButtonRescueText>
      </ButtonRescue>
    </Container>
  );
}
