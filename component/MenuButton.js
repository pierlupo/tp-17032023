import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

export default function MenuButton() {
  return (
 
    <Pressable >
    <View style={styles.catContainer}>
      <Text style={styles.catTitle}>Italian</Text>
      
    </View>
    </Pressable>
)
}

const styles = StyleSheet.create({

catContainer: {
height: 200,
width: 200,
backgroundColor: "pink",
borderRadius: 5,
padding:20,
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