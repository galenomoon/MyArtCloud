
import { View, TextInput, Keyboard } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';

//styles
import Icon from 'react-native-vector-icons/Ionicons';
import stylesForm from './stylesForm';
import styles from './styles';

//navigation
import { useRoute, useNavigation } from '@react-navigation/native';

//utils
import MyTouchableOpacity from '../../../utils/MyTouchableOpacity';

//firebase
import firebase from '../../firebaseConection';
import Divider from '../../../utils/Divider';

export default function Write() {
  const route = useRoute();
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [title, setTitle] = useState(route.params?.item?.title ?? '');
  const [text, setText] = useState(route.params?.item?.text ?? '');
  const [key, setKey] = useState(route.params?.item?.key ?? '');
  const [userKey, setUserKey] = useState(route.params?.userKey);
  const inputRef = useRef(null);
  const navigation = useNavigation();

  const focusTextInput = () => inputRef.current.focus()

  const back = () => navigation.navigate('Home');

  async function saveNote() {
    if (key) {
      await firebase.database().ref(`users/${userKey}/notes/${key}`).update({ title, text });
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
    back()
  }


  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow', () => setKeyboardVisible(true)
    )
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide', () => setKeyboardVisible(false)
    )
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon onPress={() => back()} style={{ margin: 10 }} name="arrow-back-outline" size={35} color="#aaa" />
      </View>
      <View style={stylesForm.container}>
        <TextInput
          onChangeText={(text) => setTitle(text)}
          onSubmitEditing={() => focusTextInput()}
          style={stylesForm.titleInput}
          placeholder="Titulo"
          autoFocus={true}
          value={title}
        />
        <Divider />
        <TextInput
          ref={inputRef}
          onChangeText={(text) => setText(text)}
          onPress={() => Keyboard.open()}
          placeholder="Digite seu Texto Aqui"
          value={text}
          editable={true}
          multiline={true}
          style={stylesForm.inputArea}
        />
        {
          !isKeyboardVisible &&
          <MyTouchableOpacity
            fn={() => saveNote()}
            style={stylesForm.saveBtn}
            childreen={<Icon name='save' size={35} color="#FFF" />}
          />
        }
      </View>
    </View>
  );
}