import React from 'react';
import NavStack from './src/nav/navStack';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import stores from '@stores/index';

const App = () => {
  return (
    <Provider store={stores}>
      <NavigationContainer>
        <NavStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
