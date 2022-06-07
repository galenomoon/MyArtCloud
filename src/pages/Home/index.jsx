import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';

//utils
import texts from '../../../utils/texts';

export default function Home() {

  console.log('texts', texts);
  return (
    <View style={styles.container}>
      <FlatList
        data={texts}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <Text style={styles.text} >{item.text}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff'
  }
});