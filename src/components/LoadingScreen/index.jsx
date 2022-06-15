import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/EvilIcons';

export default function LoadingScreen() {
  return (
    <View style={{ alignItems: "center", justifyContent:"center" }}>
      <Icon name="spinner" size={50} color="#fff" />
      <Text style={{ fontWeight: "bold", color: "#FFF" }}>Loading</Text>
    </View>
  )
}