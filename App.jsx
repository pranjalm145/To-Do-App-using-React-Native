import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/Screens/HomeScreen'
import { NavigationContainer} from '@react-navigation/native'
import WelcomeScreen from './src/Screens/WelcomeScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Welcome'
    >
      <Stack.Screen name= "Welcome" component={WelcomeScreen}
      options={{
        headerShown: false
      }}
       />
      <Stack.Screen name="Profile" component={HomeScreen} />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})