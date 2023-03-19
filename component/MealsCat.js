import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React, {useState} from 'react';
import {MEALS} from '../data/data.js';
import Displaycat from './Displaycat.js';

export default function MealsCat(navigation, title) {
  const [MealsCat, setMealsCat] = useState(MEALS);

  return (
    <View style={styles.container}>
      <FlatList
        data={MealsCat}
        renderItem={itemData => {
          return (
            <View style={styles.mealContainer}>
              <Image
                style={styles.img}
                source={{uri: itemData.item.imageUrl}}
              />
              {/* <Displaycat id={itemData.item.id} title={itemData.item.title} duration={itemData.item.duration} complexity={itemData.item.complexity} affordability={itemData.item.affordability}/> */}

              <Text
                style={styles.textStyle}
                id={itemData.item.id}
                title={itemData.item.title}
              />
              <Text
                style={styles.textStyle}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
              />
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
  img: {
    width: '100%',
    height: '80%',
  },
  mealContainer: {
    flex: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '90%',
    elevation: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 20,
  },
  textStyle: {
    height: 150,
    fontSize: 50,
    color: 'black',
  },
  mealTitle: {
    fontSize: 50,
    color: 'grey',
  },
});
