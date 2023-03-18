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
      
      <FlatList data={CatItems} numColumns={numColumns} renderItem={(itemData) => {
        
          return ( 
            <Pressable onPress={goToPage}>
            <View  style={{
              backgroundColor: itemData.item.color,
              margin: 15,
              borderRadius: 5,
            }}>
             <MenuButton  id={itemData.item.id} title={itemData.item.title} />
             </View>
             </Pressable>
           )
        }} keyExtractor={(item,index) => {
          return item.color
        }}></FlatList> 
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
 
});
