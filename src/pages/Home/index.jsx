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
  const [notes, setNotes] = useState([]);
  const navigation = useNavigation();
  const route = useRoute();
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
      "Log-out", "Deseja realmente sair?",
      [{
        text: "Cancelar",
        onPress: () => { },
        style: "cancel"
      },
      {
        text: "Sair", onPress: async () => {
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
        onPress: () => { },
        style: "cancel"
      },
      {
        text: "Deletar", onPress: async () => {
          key && await firebase.database().ref(`users/${userKey}/notes/${key}`).remove();
          navigation.navigate('Home');
        }
      }]
    );
  }

  const renderItem = ({ item }) => (
    <MyTouchableOpacity
      fn={() => navigation.navigate("Write", { item, userKey })}
      onLongPress={() => deleteNote(item.key)}
      delayLongPress={1000}
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
    </View>
  );
}