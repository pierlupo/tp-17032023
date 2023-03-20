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

import {CATEGORIES} from '../data/data.js';
import MenuButton from './MenuButton.js';

export default function HomePage({navigation}) {
  // const [CatItems, setCatItems] = useState(CATEGORIES);
  const numColumns = 2;

  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        numColumns={numColumns}
        renderItem={itemData => {
          return (
            <View
              style={{
                backgroundColor: itemData.item.color,
                margin: 15,
                borderRadius: 5,
              }}>
              <Pressable> 
                <MenuButton title={itemData.item.title} color={itemData.item.color} onPress={navigation.navigate('MealsCat', {categoryId : itemData.item.id})} />
              </Pressable>
            </View>
          );
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}></FlatList>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
