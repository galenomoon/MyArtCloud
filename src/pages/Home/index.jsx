import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, View, FlatList, Alert } from 'react-native';

//asyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';

//utils
import MyTouchableOpacity from '../../../utils/MyTouchableOpacity';

// styles

import styles from './styles';

// navigation
import { useRoute, useNavigation } from '@react-navigation/native';

//components
import CircleButton from '../../components/CircleButton';
import PreviewText from '../../components/PreviewText';

// firebase
import firebase from '../../firebaseConection';
import LoadingScreen from '../../components/LoadingScreen';

export default function Home() {
  const route = useRoute();
  const navigation = useNavigation();
  const [isLoaded, setIsLoaded] = useState(false);
  const [notes, setNotes] = useState([]);
  const [userKey, setUserKey] = useState(route.params?.userKey)

  useEffect(() => {
    function getNotes() {
      firebase.database().ref(`users/${userKey}/notes`).on('value', (snapshot) => {
        let list = [];
        snapshot.forEach((child) => {
          let data = {
            key: child.key,
            title: child.val().title,
            text: child.val().text,
            isLocked: child.val().isLocked,
            lastUpdate: child.val().lastUpdate,
          }
          list.push(data);
        })
        setNotes(list);
        setIsLoaded(true);
      });
    }
    getNotes();
  }, []);

  function logout() {
    Alert.alert(
      "Sair", "Deseja realmente sair?",
      [{
        text: "Cancelar",
        onPress: () => { }
      },
      {
        text: "Sair",
        onPress: async () => {
          await firebase.auth().signOut();
          navigation.navigate('Login');
          AsyncStorage.clear()
        }
      }]
    );
  }

  async function deleteNote(key) {
    Alert.alert("Deletar nota", "Deseja realmente deletar esse texto?",
      [{
        text: "Cancelar",
        onPress: () => { }
      },
      {
        text: "Deletar",
        onPress: async () => await firebase.database().ref(`users/${userKey}/notes/${key}`).remove()
      }]
    );
  }

  const empty = () => (
    <View style={{ alignItems: "center" }}>
      <Text style={styles.emptyText}>Você ainda não tem textos salvos</Text>
    </View>
  )

  const allNotes = () => (
    <FlatList
      data={notes}
      keyExtractor={item => item.key}
      renderItem={({ item }) =>
        <MyTouchableOpacity
          fn={() => navigation.navigate("Write", { item, userKey })}
          onLongPress={() => deleteNote(item.key)}
          delayLongPress={600}
          children={<PreviewText text={item} />}
        />
      }
    />
  )

  return (
    <SafeAreaView style={styles.container}>
      {isLoaded ?
        <>
          {notes.length > 0 ? allNotes() : empty()}
          < CircleButton
            onPress={() => navigation.navigate("Write", { userKey: userKey })}
            position={"downRight"}
            btnColor={"#1fa3b8"}
            icon='add-outline'
          />
          <CircleButton
            onPress={() => logout()}
            position={"downLeft"}
            btnColor="#c74444"
            icon='log-out'
          />
        </>
        :
        <LoadingScreen/>
      }
    </SafeAreaView>
  );
}
