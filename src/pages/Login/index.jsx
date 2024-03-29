import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, Alert } from "react-native";

//asyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';

//navigation
import { useNavigation } from '@react-navigation/native';

//firebase
import firebase from '../../firebaseConection';

//styles
import styles from "./styles";

//utils
import MyTouchableOpacity from '../../../utils/MyTouchableOpacity';
import LoadingScreen from '../../components/LoadingScreen';
import errorAlert from '../../../utils/errorAlert';

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoaded, setIsLoaded] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isCreateAccount, setIsCreateAccount] = useState(false);
  const clearForm = () => [setEmail(''), setPassword(''), setConfirmPassword('')]
  const devTest = () => navigation.navigate("Home")

  useEffect(() => {
    AsyncStorage.getItem("isUserLogged").then(value => {
      value && navigation.navigate("Home", { userKey: value })
    });
  }, [])

  const saveUserKeyInAsyncStorage = (userKey) => AsyncStorage.setItem("isUserLogged", userKey)

  async function createAccount() {
    if (password !== confirmPassword) {
      Alert.alert('Senhas não conferem');
      return;
    }
    if (email === '' || password === '' || confirmPassword === '') {
      Alert.alert('Preencha todos os campos');
      return;
    }

    await firebase.auth().createUserWithEmailAndPassword(email, password).then(res => {
      navigation.navigate("Home", { userKey: res.user.uid });
      Alert.alert('Conta Cadastrada com Sucesso!');
      firebase.database().ref('users').child(res.user.uid).set({ email: email });
      setIsCreateAccount(false)
      clearForm()
      saveUserKeyInAsyncStorage(res.user.uid)
    }).catch(error => errorAlert(error));
  }

  async function login() {
    setIsLoaded(false)
    if (email === '' || password === '') {
      Alert.alert('Preencha todos os campos');
      return;
    }

    await firebase.auth().signInWithEmailAndPassword(email, password).then(res => {
      navigation.navigate("Home", { userKey: res.user.uid });
      Alert.alert('Login realizado com sucesso!');
      clearForm()
      saveUserKeyInAsyncStorage(res.user.uid)
    }).catch(error => errorAlert(error));
    setIsLoaded(true)
  }

  return (
    isLoaded ? (
      <View style={styles.container}>
        <View style={styles.containerForm}>
          <Image
            source={require("../../../images/logo.png")}
            style={{ width: 200, height: 200, marginTop: 20 }}
          />
          <TextInput
            value={email.toLowerCase().trim()}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
            autoCapitalize="none"
            placeholder="E-mail"
          />
          <TextInput
            value={password}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
            placeholder="Senha"
          />
          {isCreateAccount &&
            <>
              <TextInput
                value={confirmPassword}
                secureTextEntry={true}
                onChangeText={(text) => setConfirmPassword(text)}
                style={styles.input}
                placeholder="Confirme sua Senha"
              />
            </>
          }
          <MyTouchableOpacity
            fn={() => isCreateAccount ? createAccount() : login()}
            children={<Text style={styles.buttonText}>{isCreateAccount ? "Criar Conta" : "Entrar"}</Text>}
            style={styles.button}
          />
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
            <Text>{isCreateAccount ? "Já" : "Não"} tem uma conta? </Text>
            <MyTouchableOpacity
              fn={() => setIsCreateAccount(!isCreateAccount)}
              children={<Text style={{ color: "blue" }}>Clique aqui</Text>}
            />
          </View>
        </View>
      </View>
    ) :
      <View style={{backgroundColor:"#C3B1E1", width:"100%", height:"100%"}}>
        <LoadingScreen />
      </View>
  );
}