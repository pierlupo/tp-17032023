import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import HomePage from './component/HomePage.js';
import AboutMeal from './component/AboutMeal.js';
import MealsCat from './component/MealsCat.js';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{title: 'All Categories'}}
        />
        <Stack.Screen
          name="AboutMeal"
          component={AboutMeal}
          options={{title: 'About the Meal'}}
        />
        <Stack.Screen
          name="MealsCat"
          component={MealsCat}
          options={{title: 'Meals Overview'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
