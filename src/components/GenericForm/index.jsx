import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image } from "react-native";

//styles
import styles from "./styles";

//utils
import MyTouchableOpacity from '../../../utils/MyTouchableOpacity';

export default function GenericForm() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isCreateAccount, setIsCreateAccount] = useState(false);

  return (
    <View style={styles.container}>
      <Image source={require("../../../images/logo.png")}
        style={{ width: 200, height: 200, marginTop: 20 }} />
      <TextInput style={styles.input} placeholder="E-mail" />
      {isCreateAccount && <TextInput style={styles.input} placeholder="Username" />}
      <TextInput style={styles.input} placeholder="Senha" />
      {isCreateAccount ?
        <>
          <MyTouchableOpacity childreen={<Text style={styles.buttonText}>Criar Conta</Text>} style={styles.button} />
          <Text>Já tem uma conta? <MyTouchableOpacity fn={() => setIsCreateAccount(false)} childreen={<Text style={{ color: "blue" }}>Clique aqui</Text>} /> </Text>
        </>
        : <>
          <MyTouchableOpacity childreen={<Text style={styles.buttonText}>Entrar</Text>} style={styles.button} />
          <Text>Não tem uma conta? <MyTouchableOpacity fn={() => setIsCreateAccount(true)} childreen={<Text style={{ color: "blue" }}>Clique aqui</Text>} /> </Text>
        </>
      }
    </View>
  );
}