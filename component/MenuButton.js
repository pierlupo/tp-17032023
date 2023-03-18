import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

export default function MenuButton({onPress, title, size, backgroundColor}) {

    // function goToPage() {
    //     console.log("clic");
    //     navigation.navigate("AboutMeal") 
    //     }
  return (
 
    <Pressable onPress={onPress}>
    <View style={[styles.catContainer,  backgroundColor && {backgroundColor}]}>
      <Text style={styles.catTitle}>{title}</Text>
      
    </View>
    </Pressable>
)
}

const styles = StyleSheet.create({

catContainer: {
height: 175,
width: 175,
backgroundColor: "pink",
borderRadius: 5,
padding:10,
margin:10
},
catTitle: {
padding:50,
fontSize: 20,
textAlign: "center",
justifyContent: "center",
alignItems: "center"
}


})