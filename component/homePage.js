import React, {useState} from 'react';
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

  const [CatItems, setCatItems] = useState(CATEGORIES);
  const numColumns = 2
  function goToPage() {
    console.log("clic");
    navigation.navigate("AboutMeal") 
    }
    
  return (
    <View style={styles.container}>
      {/* <Pressable onPress={() => navigation.navigate("AboutMeal")}>
      <View style={styles.catContainer}>
        <Text style={styles.catTitle}>Italian</Text>
          </Pressable>

      {/* <View style={styles.row}>
        <MenuButton />
        <MenuButton />
      </View>
      <View style={styles.row}>
        <MenuButton />
        <MenuButton />
      </View>
      <View style={styles.row}>
        <MenuButton />
        <MenuButton />
      </View>
      <View style={styles.row}>
        <MenuButton />
        <MenuButton />
      </View> */}
      
      <FlatList data={CatItems} numColumns={numColumns} renderItem={(itemData) => {
        
          return ( 
             <MenuButton id={itemData.item.id} title={itemData.item.title} color={itemData.item.color} onPress={goToPage}/>
           )
        }} keyExtractor={(item,index) => {
          return item.id
        }}></FlatList> 
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // row: {
  //   Width: '100%',
  //   flexDirection: 'row',
  //   justifyContent: 'space-around',
    
  // },
 
});
