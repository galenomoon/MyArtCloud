import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

//utils
import texts from '../../../utils/texts';

//components
import PreviewText from '../../components/PreviewText';

export default function Home() {

  console.log('texts', texts);
  return (
    <View style={styles.container}>
      <FlatList
        data={texts}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <PreviewText style={styles.text} text={item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C3B1E1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff'
  }
});