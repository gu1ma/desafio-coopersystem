import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import colors from '~/styles/colors';

import InvestimentsList from '~/pages/InvestimentsList';

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="InvestimentsList"
          options={() => {
            return {
              headerTitle: 'Resgate',
              headerTintColor: colors.primary,
              headerStyle: {
                backgroundColor: colors.secondary,
              },
            };
          }}
          component={InvestimentsList}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
