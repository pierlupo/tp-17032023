import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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


const Stack = createNativeStackNavigator();

function App(){
  

  return(

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomePage} options={{title:'All Categories'}}/>
        <Stack.Screen name='AboutMeal' component={AboutMeal}/>
      </Stack.Navigator>
    </NavigationContainer>


  )
}


const styles = StyleSheet.create({
  
});

export default App;
