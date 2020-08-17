import React from 'react';

import { FlatList, Text } from 'react-native';

import { Container } from './styles';

import ListHeader from '~/components/InvestimentsList/Header';
import Item from '~/components/InvestimentsList/Item';

export default function InvestimentsList() {
  const data = [
    {
      id: 1,
      title: 'INVESTIMENTO I',
      subTitle: 'Minha aposentadoria',
      value: '75.100,00',
    },
    {
      id: 2,
      title: 'INVESTIMENTO I',
      subTitle: 'Minha aposentadoria',
      value: '75.100,00',
    },
  ];

  return (
    <Container>
      <FlatList
        ListHeaderComponent={ListHeader}
        data={data}
        keyExtractor={(investItem) => String(investItem.id)}
        //onEndReached={() => {}}
        onEndReachedThreshold={0.1}
        //ListFooterComponent={loading && <Loading />}
        //onRefresh={refreshList} // Quando esta carregando
        //refreshing={refreshing}
        renderItem={({ item }) => (
          <Item
            title={item.title}
            subTitle={item.subTitle}
            value={item.value}
          />
        )}
      />
    </Container>
  );
}
