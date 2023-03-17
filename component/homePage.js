import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Pressable,
  FlatList,
} from 'react-native'; 

import { CATEGORIES } from '../data/data.js';
import MenuButton from './MenuButton.js';


export default function HomePage({navigation, route}) {

  const [CATEGORIES,setCATEGORIES] = useState([])

  function goToPage() {
    onPress=navigation.navigate("AboutMeal")
  }

  return (
    
    <ScrollView  style={styles.container}>
      {/* <Pressable onPress={() => navigation.navigate("AboutMeal")}>
      <View style={styles.catContainer}>
        <Text style={styles.catTitle}>Italian</Text>
        
      </View>
      <View style={styles.catContainer}>
        <Text style={styles.catTitle}>Italian</Text>
        
      </View>
      <View style={styles.catContainer}>
        <Text style={styles.catTitle}>Italian</Text>
        
      </View>
      <View style={styles.catContainer}>
        <Text style={styles.catTitle}>Italian</Text>
        
      </View>
      <View style={styles.catContainer}>
        <Text style={styles.catTitle}>Italian</Text>
        
      </View>
      <View style={styles.catContainer}>
        <Text style={styles.catTitle}>Italian</Text>
        
      </View>
      </Pressable> */}
      <MenuButton />
    </ScrollView>

  )
}

const styles = StyleSheet.create({
//   container : {
//     flex : 1,
     
// },
// catContainer: {
//   height: 200,
//   width: 200,
//   backgroundColor: "pink",
//   borderRadius: 5,
//   padding:20,
//   margin:10
// },
// catTitle: {
//   padding:50,
//   fontSize: 20,
//   textAlign: "center",
//   justifyContent: "center",
//   alignItems: "center"
// }


})