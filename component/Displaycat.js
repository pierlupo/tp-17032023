import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function Displaycat(
  onPress,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
) {
  const navigation = useNavigation();
  function goToPage() {
    console.log('clic');
    navigation.navigate('Home');
  }
  return (

    <Pressable onPress={goToPage}>
      <View style={styles.mealContainer}>
        <Image style={styles.img} source={{uri:{imageUrl}}}>{imageUrl}</Image>
        <Text style={styles.mealTitle}>{title}</Text>
        <Text style={styles.textStyle}>{duration}{complexity}{affordability}</Text>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: '100%',
    height: '70%',
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
    fontSize: 200,
    color: 'black',
  },
  mealTitle: {
    fontSize: 50,
    color: 'grey',
  },
});
