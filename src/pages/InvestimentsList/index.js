import React, { useState, useEffect } from 'react';

import { FlatList } from 'react-native';

import { Container } from './styles';

import colors from '~/styles/colors';

import Loader from 'react-native-modal-loader';

import ListHeader from '~/components/InvestimentsList/Header';
import Item from '~/components/InvestimentsList/Item';

import api from '~/services/api';

export default function InvestimentsList() {
  const [loading, setLoading] = useState(false);
  const [investimentsList, setInvestimentsList] = useState([]);

  useEffect(() => {
    async function getListInvestiments() {
      setLoading(true);
      const { data } = await api.get('5e76797e2f0000f057986099');
      setInvestimentsList(data.response.data.listaInvestimentos);
      setLoading(false);
    }

    getListInvestiments();
  }, []);

  return (
    <Container>
      <Loader loading={loading} color={colors.secondary} />
      <FlatList
        ListHeaderComponent={ListHeader}
        data={investimentsList}
        keyExtractor={(investItem) => String(investItem.nome)}
        renderItem={({ item }) => <Item itemData={item} />}
      />
    </Container>
  );
}
