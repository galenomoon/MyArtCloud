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
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isCreateAccount, setIsCreateAccount] = useState(false);
  const navigation = useNavigation();

  const clearForm = () => {
    setEmail('');
    setUsername('');
    setPassword('');
  }

  async function createAccount() {
    if (email !== '' && username !== '' && password !== '' && confirmPassword !== '') {
      if (password === confirmPassword) {
        await firebase.auth().createUserWithEmailAndPassword(email, password).then(res => {
          Alert.alert('Conta Cadastrada com Sucesso!');
          firebase.database().ref('users').child(res.user.uid).set({
            username: username,
            email: email
          });
          setIsCreateAccount(false)
          clearForm()
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
      }
      else {
        Alert.alert('Senhas não coincidem')
      }
    } else {
      Alert.alert('Preencha todos os campos')
    }
  }

  async function login() {
    if (email !== '' && password !== '') {
      await firebase.auth().signInWithEmailAndPassword(email, password).then(res => {
        Alert.alert('Login realizado com sucesso!');
        clearForm()
        navigation.navigate("Home", { userKey: res.user.uid });
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
      <TextInput secureTextEntry={true} value={password} onChangeText={(text) => setPassword(text)} style={styles.input} placeholder="Senha" />
      {isCreateAccount &&<TextInput secureTextEntry={true} value={confirmPassword} onChangeText={(text) => setConfirmPassword(text)} style={styles.input} placeholder="Confirme sua Senha" />}
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