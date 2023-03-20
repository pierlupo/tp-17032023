import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {CATEGORIES, MEALS} from '../data/data.js';
import Displaycat from './Displaycat.js';

export default function MealsCat({navigation, route, title}) {
  // const [MealsCat, setMealsCat] = useState(MEALS);

  const catId = route.params.categoryId;
  // const catId = "c1"

  const meals = MEALS.filter((item)=>{
    return item.categoryIds.includes(catId)
  })

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
        (category) => category.id == catId
    ).title;

    navigation.setOptions({
        title : categoryTitle
    })
},[catId, navigation])


  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        renderItem={itemData => {
          return (
            <View style={styles.mealContainer}>
              <Image
                style={styles.img}
                source={{uri: itemData.item.imageUrl}}
              />
              {/* <Displaycat
                id={itemData.item.id}
                title={itemData.item.title} */}
                {/* // duration={itemData.item.duration}
                // complexity={itemData.item.complexity}
                // affordability={itemData.item.affordability} */}
              {/* /> */}

              <Text
                style={styles.mealTitle}
                // id={itemData.item.id}
                // title={itemData.item.title}
              >{itemData.item.title}</Text>
              <Text
                style={styles.textStyle}
                // duration={itemData.item.duration}
                // complexity={itemData.item.complexity}
                // affordability={itemData.item.affordability}
              >{itemData.item.duration}m {itemData.item.complexity} {itemData.item.affordability}</Text>
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
    height: 300,
    borderRadius: 5,
  },
  mealContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '90%',
    elevation: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 20,
  },
  textStyle: {
    // height: 150,
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    padding: 5,
  },
  mealTitle: {
    padding: 5,
    // height: 150,
    fontSize: 20,
    color: '#808080',
    textAlign: 'center',
    fontWeight: 'bold',
    
  },
});
