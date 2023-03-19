import React, {useState} from 'react';
import {MEALS} from '../data/data.js';
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

export default function AboutMeal(navigation) {
  const [MealItem, setMealItem] = useState(MEALS);

  return (
    <View>
      <FlatList
        data={MealItem}
        renderItem={itemData => {
          return (
            <Pressable>
              <Text id={itemData.item.id} title={itemData.item.title} />
            </Pressable>
          );
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({});
