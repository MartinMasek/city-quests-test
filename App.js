import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AdventureDetail from './src/screens/Home/components/AdventureDetail'
import FooWrapper from './src/screens/Home/components/FooWrapper'
import { Provider } from 'react-redux';
import store from './store';

export default class App extends React.Component {

  render() {
    let i = 100
    let c = styles.blackText

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
          <Text>Testdd{i}</Text>
          <FooWrapper />
          <AdventureDetail adventureName="Stop the golem" parentStyles={c} />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'moccasin',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  blackText: {
    color: 'black'
  }
});

// const RootStack = createStackNavigator({
//   Home: {
//     screen: HomeScreen
//   },
// });
