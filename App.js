import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import createStore from './src/reducers';
import RootScreen from './src/navigation/RootScreen';
const App = () => {
  const {store, persistor} = createStore();
  return (
    <SafeAreaProvider style={{backgroundColor: 'black'}}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootScreen />
      </PersistGate>
    </Provider>
  </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1},
});

export default App;