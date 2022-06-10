import { View, TextInput, Text, Keyboard, Alert } from 'react-native';
import React, { useState, useRef } from 'react';

//utils
import MyTouchableOpacity from '../../../utils/MyTouchableOpacity';

//firebase
import firebase from '../../firebaseConection';

//navigation
import { useRoute, useNavigation } from '@react-navigation/native';

//styles
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

export default function NoteInputText({userKey}) {
  const route = useRoute();
  const [title, setTitle] = useState(route.params?.title ?? '');
  const [text, setText] = useState(route.params?.text ?? '');
  const [key, setKey] = useState(route.params?.key ?? '');
  const inputRef = useRef(null);
  const navigation = useNavigation();


  const focusTextInput = () => inputRef.current.focus()

  async function saveNote() {
    if (key) {
      await firebase.database().ref(`notes/${key}`).update({
        title,
        text,
      });
    } else {
      if (title !== '' && text !== '') {
        let note = await firebase.database().ref(`users/${userKey}`)
        let key = note.push().key;

        note.child(key).set({
          title: title,
          text: text
        })
        setText('');
        setTitle('');
      }
    }
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título:</Text>
      <TextInput
        onChangeText={(text) => setTitle(text)}
        onSubmitEditing={() => focusTextInput()}
        style={styles.titleInput}
        autoFocus={true}
        value={title}
      />
      <Text style={styles.label}>Texto:</Text>
      <TextInput
        ref={inputRef}
        onChangeText={(text) => setText(text)}
        onPress={() => Keyboard.open()}
        value={text}
        editable={true}
        multiline={true}
        style={styles.inputArea}
      />
      <MyTouchableOpacity
        fn={() => saveNote()}
        style={styles.saveBtn}
        childreen={<Icon name='save' size={35} color="#FFF" />}
      />
    </View>
  )
}