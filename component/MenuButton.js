import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

export default function MenuButton({onPress, title, size, backgroundColor, color}) {

    // function goToPage() {
    //     console.log("clic");
    //     navigation.navigate("AboutMeal") 
    //     }
  return (
 
    <Pressable onPress={onPress}>
    <View style={styles.catContainer}  >
      <Text style={styles.catTitle}>{title}</Text>
      <Text>{color}</Text> 
    </View>
    </Pressable>
)
}

const styles = StyleSheet.create({

catContainer: {
height: 175,
width: 175,
borderRadius: 5,
margin:15,
// backgroundColor:{color},
},
catTitle: {
padding:10,
fontSize: 22,
fontWeight:"bold",
textAlign: "center",
marginTop:60,
}


})