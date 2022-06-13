
import { SafeAreaView, View, Text, TextInput, ScrollView, Keyboard, Alert } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';

//styles
import Icon from 'react-native-vector-icons/Ionicons';
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
  const inputRef = useRef(null);
  const navigation = useNavigation();
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [userKey, setUserKey] = useState(route.params?.userKey);
  const [isLocked, setIsLocked] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(route.params?.item?.lastUpdate ?? '');
  const [title, setTitle] = useState(route.params?.item?.title ?? '');
  const [text, setText] = useState(route.params?.item?.text ?? '');
  const [hasModified, setHasModified] = useState(true);
  const [key, setKey] = useState(route.params?.item?.key ?? '');
  const getNow = () => new Date().toLocaleString("pt-BR");

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

  useEffect(() => {
    const initialValue = { title: route.params?.item?.title ?? '', text: route.params?.item?.text ?? '' };
    title !== initialValue.title || text !== initialValue.text ? setHasModified(true) : setHasModified(false);
  }, [title, text]);

  const focusTextInput = () => inputRef.current.focus()

  const back = () => navigation.navigate('Home');

  const backWithoutSave = (key) => {
    Alert.alert(
      "Você tem alterações não salvas", "Deseja realmente sair sem salvar?",
      [{
        text: "Cancelar", onPress: () => { }
      },
      {
        text: "Sair sem salvar", onPress: async () => back()
      },
      {
        text: "Sair e salvar", onPress: async () => saveNote(key)
      }]
    );
  }

  async function saveNote() {
    if (key) {
      await firebase.database().ref(`users/${userKey}/notes/${key}`).update({ title, text, lastUpdate: getNow() });
    }
    else {
      let note = firebase.database().ref(`users/${userKey}/notes`)
      let key = note.push().key;

      await note.child(key).set({
        title: title === '' ? "Nova Anotação" : title,
        text: text,
        lastUpdate: getNow(),
      })
    }
    back()
  }

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Icon onPress={() => hasModified ? backWithoutSave(key) : back()} name="arrow-back-outline" size={35} color="#888" />
            {lastUpdate && <Text style={{ color: "#555" }}>Última atualização: {lastUpdate}</Text>}
            {<Icon name={`lock${isLocked ? "-closed" : "-open"}`} size={25} color={`${isLocked ? "#888" : "#aaa"}`} style={styles.close} />}
          </View>
          <View style={styles.containerForm}>
            <TextInput
              onChangeText={(text) => setTitle(text)}
              onSubmitEditing={() => focusTextInput()}
              style={styles.titleInput}
              placeholder="Titulo"
              autoFocus={true}
              multiline={true}

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
              scrollEnabled={false}
              multiline={true}
              style={styles.inputArea}
            />
          </View>
        </SafeAreaView>
      </ScrollView>
      {
        !isKeyboardVisible &&
        <MyTouchableOpacity
          fn={() => saveNote(key)}
          style={styles.saveBtn}
          children={<Icon name='save' size={35} color="#FFF" />}
        />
      }
    </>
  );
}