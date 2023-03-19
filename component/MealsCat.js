import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React, {useState} from 'react';
import {MEALS} from '../data/data.js';

export default function MealsCat(navigation) {
  const [MealsCat, setMealsCat] = useState(MEALS);

  return (
    <View style={styles.container}>
      
        <FlatList
          data={MealsCat}
          renderItem={itemData => {
            return (
              <>
              <View style={styles.Mealcontainer}>
                <Image
                  style={styles.img}
                  source={{uri: itemData.item.imageUrl}}
                />
                <Text id={itemData.item.id} title={itemData.item.title} />
                <Text
                  duration={itemData.item.duration}
                  complexity={itemData.item.complexity}
                  affordability={itemData.item.affordability}
                  
                />
                </View>
              </>
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
    height: '100%',
  },
  Mealcontainer: {
    flex: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '90%',
    elevation: 20,
    backgroundColor: '#C9C5CB',
    borderRadius: 10,
  },
});
