import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MEALS } from '../data/data'

export default function Meals({navigation, route}) {
    const categoryId = route.params.categoryId

    const meals = MEALS.filter((item) => {
        return item.categoryIds.includes(categoryId)
    })
  return (
   <FlatList data={meals} keyExtractor={(item)=> item.id}
   renderItem={(itemData) => {

    return(<Text>{itemData.item.title}</Text>)

    }} 
    
    />
  )
}

const styles = StyleSheet.create({})