import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AdventureDetail from './src/screens/Home/components/AdventureDetail'
import { createStackNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    let i = 10
    let c = styles.blackText
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>Testdd{i}</Text>
        <AdventureDetail adventureName="Stop the golem" parentStyles={c} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'moccasin',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:30,
  },
  blackText:{
    color:'black'
  }
});

// const RootStack = createStackNavigator({
//   Home: {
//     screen: HomeScreen
//   },
// });
