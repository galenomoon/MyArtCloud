import React, { useState, createContext, useEffect } from "react";
import { Alert } from "react-native";

//asyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';

// firebase
import firebase from '../firebaseConection';

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [userKey, setUserKey] = useState(null)

  useEffect(() => {
    saveInStorage()
  }, [])

  const saveInStorage = () => AsyncStorage.getItem("isUserLogged").then(value => {
    value && setUserKey({
      value
    })
  })


  const logout = () => {
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
          AsyncStorage.clear()
          setUserKey(null)
        }
      }]
    );
  }


  return (
    <AuthContext.Provider value={{ signed: !!userKey, userKey, saveInStorage, logout }} >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider