import React, { useState } from 'react';
import { View, Text, TextInput, Image } from "react-native";

//navigation
import { useNavigation } from '@react-navigation/native';

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

  return (
    <View style={styles.container}>
      <Image source={require("../../../images/logo.png")}
        style={{ width: 200, height: 200, marginTop: 20 }} />
      <TextInput style={styles.input} placeholder="E-mail" />
      {isCreateAccount && <TextInput style={styles.input} placeholder="Username" />}
      <TextInput style={styles.input} placeholder="Senha" />
      <MyTouchableOpacity fn={() => navigation.navigate("Home")} childreen={<Text style={styles.buttonText}>{isCreateAccount ? "Criar Conta" : "Entrar" }</Text>} style={styles.button} />
      {isCreateAccount ?
        <View style={{flexDirection: "row", alignItems:"center", justifyContent:"center"}}>
            <Text>Já tem uma conta? <MyTouchableOpacity fn={() => setIsCreateAccount(false)} childreen={<Text style={{ color: "blue" }}>Clique aqui</Text>} /> </Text>
        </View>
        : <View style={{flexDirection: "row", alignItems:"center", justifyContent:"center"}}>
            <Text>Não tem uma conta? <MyTouchableOpacity fn={() => setIsCreateAccount(true)} childreen={<Text style={{ color: "blue" }}>Clique aqui</Text>} /> </Text>
        </View>
      }
    </View>
  );
}