import { View, TextInput, Text, Keyboard } from 'react-native';
import React, { useState, useRef } from 'react';

//navigation
import { useRoute } from '@react-navigation/native';

//styles
import styles from './styles';

export default function NoteInputText() {
  const route = useRoute();
  const [title, setTitle] = useState(route.params?.title ?? '');
  const [text, setText] = useState(route.params?.text ?? '');
  const inputRef = useRef(null);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título:</Text>
      <TextInput
        onChangeText={(text) => setTitle(text)}
        value={title}
        style={styles.titleInput}
        autoFocus={true}
        onSubmitEditing={() => inputRef.current.focus()}
      />
      <Text style={styles.label}>Texto:</Text>
      <TextInput
        ref={inputRef}
        onChangeText={(text) => setText(text)}
        onPress={() => Keyboard.open()}
        value={text}
        editable={true}
        multiline={true}
        style={styles.inputArea}/>
    </View>
  )
}