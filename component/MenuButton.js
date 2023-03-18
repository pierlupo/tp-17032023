import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import Category from '../models/category'

export default function MenuButton({onPress, title, size, backgroundColor, color}) {

    function goToPage() {
        console.log("clic");
        navigation.navigate("AboutMeal") 
        }
  return (
 
    <Pressable onPress={goToPage}>
    
    <View style={styles.catContainer} >
      <Text style={styles.catTitle}>{title}</Text>
    </View>
    
    </Pressable>
)
}

const styles = StyleSheet.create({

catContainer: {
height: 175,
width: 175,
},
catTitle: {
padding:10,
fontSize: 22,
fontWeight:"bold",
textAlign: "center",
marginTop:60,
}


})