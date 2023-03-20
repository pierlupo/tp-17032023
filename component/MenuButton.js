import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function MenuButton({
  onPress,
  title,
  color,
}) {
  // const navigation = useNavigation();
  // function goToPage() {
  //   console.log('clic');
  //   navigation.navigate('MealsCat');
  // }
  return (
    <Pressable onPress={onPress} style={({pressed}) =>  [ styles.button, pressed ? styles.buttonPressed : null] }>
      <View style={[styles.catContainer, {backgroundColor: color}]}>
        <Text style={styles.catTitle}>{title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  catContainer: {
    height: 175,
    width: 175,
    borderRadius: 5,
  },
  catTitle: {
    padding: 10,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60,
  },
  button : {
    flex : 1,
},
buttonPressed : {
    opacity : 0.5,
},
});
