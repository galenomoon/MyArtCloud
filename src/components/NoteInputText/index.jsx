import { View, TextInput, Text, Alert } from 'react-native';
import React, { useState } from 'react';

//navigation
import { useRoute } from '@react-navigation/native';

//styles
import styles from './styles';

export default function NoteInputText() {
  const route = useRoute();
  const [title, setTitle] = useState(route.params?.title ?? '');
  const [text, setText] = useState(route.params?.text ?? '');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título:</Text>
      <TextInput
        onChangeText={(text) => setTitle(text)}
        value={title}
        style={styles.titleInput}
      />
      <Text style={styles.label}>Texto:</Text>
      <TextInput
        onChangeText={(text) => setText(text)}
        value={text}
        multiline={true}
        editable
        maxLength={9000}
        numberOfLines={9000}
        style={styles.inputArea}/>
    </View>
  )
}