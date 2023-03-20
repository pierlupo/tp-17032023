import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function MenuButton({onPress, title, color}) {
  // const navigation = useNavigation();
  // function goToPage() {
  //   console.log('clic');
  //   navigation.navigate('MealsCat');
  // }
  return (
    <View style={styles.catContainer}>
      <Pressable
        onPress={onPress}
        style={({pressed}) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}>
        <View style={[styles.innerContainer, {backgroundColor: color}]}>
          <Text style={styles.catTitle}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  catContainer: {
    margin: 10,
    flex:1,
    height: 150,
    width: 150,
    borderRadius: 8,
    elevation: 10,
    backgroundColor: 'white',
  },
  catTitle: {
    fontSize: Platform.OS === 'android' ? 20 : 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 10,
    borderRadius: 8,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
