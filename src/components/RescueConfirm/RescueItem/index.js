import React, { useState } from 'react';

import {
  InfoContainer,
  Title,
  Desc,
  ContainerStocks,
  RescueContainer,
  RescueContainerTitle,
  RescueInputContainer,
  RescueInputTextCoin,
  RescueInput,
  RescueErrorText,
} from './styles';

export default function RescueItem({ rescueData, total }) {
  const [errorStatus, setErrorStatus] = useState(false);
  const [errorMessage, setErrorMessage] = useState('Erro e bla bla bla bla');

  return (
    <ContainerStocks>
      <InfoContainer>
        <Title>Ação</Title>
        <Desc>{rescueData.nome}</Desc>
      </InfoContainer>
      <InfoContainer>
        <Title>Saldo acumulado</Title>
        <Desc>
          {((rescueData.percentual * total) / 100)
            .toFixed(2)
            .replace('.', ',')
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}
        </Desc>
      </InfoContainer>
      <RescueContainer>
        <RescueContainerTitle>Valor a resgatar</RescueContainerTitle>
        <RescueInputContainer>
          <RescueInputTextCoin>R$</RescueInputTextCoin>
          <RescueInput />
        </RescueInputContainer>
        {errorStatus && <RescueErrorText>{errorMessage}</RescueErrorText>}
      </RescueContainer>
    </ContainerStocks>
  );
}
