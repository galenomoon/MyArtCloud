import React, { useState } from 'react';
import { View, Text, TextInput, Image, Alert } from "react-native";

//navigation
import { useNavigation } from '@react-navigation/native';

//firebase
import firebase from '../../firebaseConection';

//styles
import styles from "./styles";

//utils
import MyTouchableOpacity from '../../../utils/MyTouchableOpacity';

export default function GenericForm() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isCreateAccount, setIsCreateAccount] = useState(false);
  const navigation = useNavigation();

  async function createAccount() {
    if (email !== '' && username !== '' && password !== '') {
      await firebase.auth().createUserWithEmailAndPassword(email, password).then(res => {
        Alert.alert('Conta Cadastrada com Sucesso!');
        setIsCreateAccount(false)
        setEmail('')
        setUsername('')
        setPassword('')
      }).catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Email já está em uso')
        }
        if (error.code === 'auth/invalid-email') {
          Alert.alert('Email inválido')
        }
        if (error.code === 'auth/weak-password') {
          Alert.alert('Senha muito fraca')
        }

      });
    } else {
      Alert.alert('Preencha todos os campos')
    }
  }

  async function login() {
    if (email !== '' && password !== '') {
      await firebase.auth().signInWithEmailAndPassword(email, password).then(res => {
        Alert.alert('Login realizado com sucesso!');
        navigation.navigate("Home")
      }).catch(error => {
        if (error.code === 'auth/user-not-found') {
          Alert.alert('Usuário não encontrado')
        }
        if (error.code === 'auth/wrong-password') {
          Alert.alert('Senha incorreta')
        }
      });
    }
    else {
      Alert.alert('Preencha todos os campos')
    }
  }

  return (
    <View style={styles.container}>
      <Image source={require("../../../images/logo.png")}
        style={{ width: 200, height: 200, marginTop: 20 }} />
      <TextInput value={email} onChangeText={(text) => setEmail(text)} style={styles.input} placeholder="E-mail" />
      {isCreateAccount && <TextInput value={username} onChangeText={(text) => setUsername(text)} style={styles.input} placeholder="Username" />}
      <TextInput value={password} onChangeText={(text) => setPassword(text)} style={styles.input} placeholder="Senha" />
      <MyTouchableOpacity fn={() => isCreateAccount ? createAccount() : login()} childreen={<Text style={styles.buttonText}>{isCreateAccount ? "Criar Conta" : "Entrar"}</Text>} style={styles.button} />
      {isCreateAccount ?
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
          <Text>Já tem uma conta? </Text>
          <MyTouchableOpacity fn={() => setIsCreateAccount(false)} childreen={<Text style={{ color: "blue" }}>Clique aqui</Text>} />
        </View>
        : <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
          <Text>Não tem uma conta? </Text>
          <MyTouchableOpacity fn={() => setIsCreateAccount(true)} childreen={<Text style={{ color: "blue" }}>Clique aqui</Text>} />
        </View>
      }
    </View>
  );
}