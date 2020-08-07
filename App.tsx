import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import StartRoutes from './src/routes/start.routes';

const App = () => (
  <NavigationContainer>
    <StartRoutes />
  </NavigationContainer>
);

export default App;