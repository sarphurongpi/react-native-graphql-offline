/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native-paper';
import { useApolloClient } from './src/app/useApolloClient';
import Root from './src/routes/Root';

const App = () => {
  const { client } = useApolloClient();

  if (!client) {
    return <Text>Initializing app...</Text>;
  }

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
