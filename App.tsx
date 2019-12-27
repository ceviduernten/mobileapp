/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import store, {persistor} from "./store";
// @ts-ignore
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Navigation from "./src/navigation/Navigation";
import colors from './src/styles/colors';

const App = () => {
  const usingHermes = typeof HermesInternal === 'object' && HermesInternal !== null;
  let [theme, setTheme] = React.useState<SupportedThemes>('light');
  return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar backgroundColor={colors.darkAccentColor} barStyle="dark-content" />
          <View style={styles.container}>
            <Navigation/>
          </View>
        </PersistGate>
      </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
