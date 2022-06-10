import { Text, View, FlatList, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';

//utils
import MyTouchableOpacity from '../../../utils/MyTouchableOpacity';

// styles
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

// navigation
import { useNavigation } from '@react-navigation/native';

//components
import PreviewText from '../../components/PreviewText';

// firebase
import firebase from '../../firebaseConection';

export default function Home() {
  const [notes, setNotes] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    async function getNotes() {
      await firebase.database().ref('notes').on('value', (snapshot) => {

        snapshot.forEach((child) => {
          let data = {
            key: child.key,
            title: child.val().title,
            text: child.val().text,
          }
        })
        setNotes(Object.values(snapshot.val()));
      });
    }
    getNotes();
  }, []);

   function logout(){
    Alert.alert(
      "Log-out",
      "Deseja realmente sair?",
      [
        {
          text: "Cancelar",
          onPress: () => {},
          style: "cancel"
        },
        { text: "Sair", onPress: async () => {
          await firebase.auth().signOut();
          navigation.navigate('Login');
        } }
      ]
    );

  }

  return (
    <View style={styles.container}>
      {notes.length > 0 ?
        <FlatList
          data={notes}
          keyExtractor={item => item.key}
          renderItem={({ item }) => <MyTouchableOpacity fn={() => navigation.navigate("Write", item)} childreen={<PreviewText text={item} />} />}
        />
        :
        <View style={{ alignItems: "center" }}>
          <Text style={styles.emptyText}>Você ainda não tem textos salvos</Text>
        </View>
      }
      <MyTouchableOpacity
        fn={() => navigation.navigate("Write")}
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