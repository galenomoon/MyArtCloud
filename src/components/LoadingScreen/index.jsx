import { View } from 'react-native'
import React from 'react'

import Icon from 'react-native-vector-icons/EvilIcons';

export default function LoadingScreen() {
  return (
    <View style={{ alignItems: "center" }}>
       <Icon name="spinner" size={50} color="#fff" />
     </View>
  )
}