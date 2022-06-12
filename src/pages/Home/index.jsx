import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, Alert } from 'react-native';

//utils
import MyTouchableOpacity from '../../../utils/MyTouchableOpacity';

// styles
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

// navigation
import { useRoute, useNavigation } from '@react-navigation/native';

//components
import PreviewText from '../../components/PreviewText';

// firebase
import firebase from '../../firebaseConection';

export default function Home() {
  const route = useRoute();
  const navigation = useNavigation();
  const [notes, setNotes] = useState([]);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
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
          }
          list.push(data);
        })
        setNotes(list);
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

  const renderItem = ({ item }) => (
    <MyTouchableOpacity
      fn={() => navigation.navigate("Write", { item, userKey })}
      onLongPress={() => deleteNote(item.key)}
      delayLongPress={690}
      childreen={<PreviewText text={item} />}
    />
  )

  return (
    <View style={styles.container}>
      {notes.length > 0 ?
        <FlatList
          data={notes}
          keyExtractor={item => item.key}
          renderItem={({ item }) => renderItem({ item })}
        />
        :
        <View style={{ alignItems: "center" }}>
          <Text style={styles.emptyText}>Você ainda não tem textos salvos</Text>
        </View>
      }
      <MyTouchableOpacity
        fn={() => navigation.navigate("Write", { userKey: userKey })}
        style={styles.newNoteBtn}
        childreen={<Icon name='add-outline' size={50} color="#FFF" />}
      />
      <MyTouchableOpacity
        fn={() => logout()}
        style={styles.logoutBtn}
        childreen={<Icon name='log-out' size={50} color="#FFF" />}
      />
      <MyTouchableOpacity
        fn={() => setIsDarkTheme(!isDarkTheme)}
        style={isDarkTheme ? styles.lightBtn : styles.darkBtn}
        childreen={<Icon name={isDarkTheme ? 'moon' : 'bulb'} size={30} color={isDarkTheme ? "#FFF" : "#333"} />}
      />
    </View>
  );
}