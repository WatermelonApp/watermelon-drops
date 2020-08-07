import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Start from '../pages/start';

const Stack = createStackNavigator();

const StartRoutes = () => (
  <Stack.Navigator>
    <Stack.Screen name="Start" component={Start} />
  </Stack.Navigator>
);

export default StartRoutes;
