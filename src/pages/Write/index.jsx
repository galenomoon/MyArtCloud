
import { View, TextInput, Text, Keyboard } from 'react-native';
import React, { useState, useRef } from 'react';

//styles
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import stylesForm from './stylesForm';

//navigation
import { useRoute, useNavigation } from '@react-navigation/native';

//utils
import MyTouchableOpacity from '../../../utils/MyTouchableOpacity';

//firebase
import firebase from '../../firebaseConection';

export default function Write() {
  const route = useRoute();
  console.log("sss",route.params);
  const [title, setTitle] = useState(route.params?.item?.title ?? '');
  const [text, setText] = useState(route.params?.item?.text ?? '');
  const [key, setKey] = useState(route.params?.item?.key ?? '');
  const inputRef = useRef(null);
  const navigation = useNavigation();
  const [userKey, setUserKey] = useState(route.params?.userKey);

  const focusTextInput = () => inputRef.current.focus()

  async function saveNote() {
    if (key) {
      await firebase.database().ref(`users/${userKey}/notes/${key}`).update({
        title,
        text,
      });
    } else {
      if (title !== '' && text !== '') {
        let note = await firebase.database().ref(`users/${userKey}/notes`)
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
      <View style={stylesForm.container}>
        <Text style={stylesForm.label}>Título:</Text>
        <TextInput
          onChangeText={(text) => setTitle(text)}
          onSubmitEditing={() => focusTextInput()}
          style={stylesForm.titleInput}
          autoFocus={true}
          value={title}
        />
        <Text style={stylesForm.label}>Texto:</Text>
        <TextInput
          ref={inputRef}
          onChangeText={(text) => setText(text)}
          onPress={() => Keyboard.open()}
          value={text}
          editable={true}
          multiline={true}
          style={stylesForm.inputArea}
        />
        <MyTouchableOpacity
          fn={() => saveNote()}
          style={stylesForm.saveBtn}
          childreen={<Icon name='save' size={35} color="#FFF" />}
        />
      </View>
    </View>
  );
}