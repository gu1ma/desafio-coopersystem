import React from 'react';

import { FlatList, Text } from 'react-native';

import { Container } from './styles';

import ListHeader from '~/components/InvestimentsList/Header';

export default function InvestimentsList() {
  const data = [
    {
      id: 1,
      value: 'opa',
    },
    {
      id: 2,
      value: 'fala',
    },
  ];

  return (
    <Container>
      <FlatList
        ListHeaderComponent={ListHeader}
        data={data}
        keyExtractor={(post) => String(post.id)}
        //onEndReached={() => loadNewsPosts()}
        onEndReachedThreshold={0.1}
        //ListFooterComponent={loading && <Loading />}
        //onRefresh={refreshList} // Quando esta carregando
        //refreshing={refreshing}
        renderItem={({ item }) => <Text>{item.value}</Text>}
      />
    </Container>
  );
}
