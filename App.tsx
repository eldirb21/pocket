import React, {useState} from 'react';
import NavStack from './src/nav/navStack';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import stores from '@stores/index';
import {NetworkDebug, Root as PopupRootProvider} from '@atoms';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  const renderDebug = () => <NetworkDebug />;
  return (
    <Provider store={stores}>
      <GestureHandlerRootView>
        {renderDebug()}
        <PopupRootProvider>
          <NavigationContainer>
            <NavStack />
          </NavigationContainer>
        </PopupRootProvider>
      </GestureHandlerRootView>
    </Provider>
  );
};

export default App;
