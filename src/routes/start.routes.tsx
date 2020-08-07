import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Start from '../pages/start';
import Modals from '../pages/modals';

const Stack = createStackNavigator();

const StartRoutes = () => (
  <Stack.Navigator>
    <Stack.Screen options={{headerShown: false}} name="Start" component={Start} />
    <Stack.Screen name="Modals"component={Modals} />
  </Stack.Navigator>
);

export default StartRoutes;
