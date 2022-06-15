import React, { useState, useEffect, useContext } from 'react';
import { Text, SafeAreaView, View, FlatList, Alert } from 'react-native';

//asyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';

//utils
import MyTouchableOpacity from '../../../utils/MyTouchableOpacity';

// styles
import styles from './styles';

// navigation
import { useNavigation } from '@react-navigation/native';

//components
import PreviewText from '../../components/PreviewText';
import CircleButton from '../../components/CircleButton';
import LoadingScreen from '../../components/LoadingScreen';

// firebase
import firebase from '../../firebaseConection';
import { AuthContext } from '../../contexts/auth';

export default function Home() {
  const navigation = useNavigation();
  const [isLoaded, setIsLoaded] = useState(false);
  const [notes, setNotes] = useState([]);
  const { ...props } = useContext(AuthContext)
  const [userKey, setUserKey] = useState(props.userKey.value)

  useEffect(() => {
    function getNotes() {
      firebase.database().ref(`users/${userKey}/notes`).on('value', (snapshot) => {
        let list = [];
        snapshot.forEach((child) => {
          let data = {
            key: child.key,
            title: child.val().title,
            text: child.val().text,
            isLocked: child.val().isLocked || false,
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

  const thereIsNoNote = () => (
    <View style={{ alignItems: "center" }}>
      <Text style={styles.emptyText}>Você ainda não tem textos salvos</Text>
    </View>
  )

  const notesList = () => (
    <FlatList
      data={notes}
      keyExtractor={item => item.key}
      renderItem={({ item }) =>
        <MyTouchableOpacity
          fn={() =>
            [navigation.navigate("Write", { item }),
            console.log("---------------------"),
            console.log("HOME ===>",item)
          ]
          }
          onLongPress={() => deleteNote(item.key)}
          delayLongPress={600}
          children={<PreviewText text={item} />}
        />
      }
    />
  )

  return (
    isLoaded ?
      <SafeAreaView style={styles.container}>
        {notes.length > 0 ? notesList() : thereIsNoNote()}
        < CircleButton
          onPress={() => navigation.navigate("Write", { userKey: userKey })}
          position={"downRight"}
          btnColor={"#1fa3b8"}
          icon='add-outline'
        />
        <CircleButton
          onPress={() => props.logout()}
          position={"downLeft"}
          btnColor="#c74444"
          icon='log-out'
        />
      </SafeAreaView>
      :
      <View style={{ backgroundColor: "#C3B1E1", width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }}>
        <LoadingScreen />
      </View>
  );
}
