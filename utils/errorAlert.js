import { Alert } from "react-native";

const errorAlert = (error) => {
  if (error.code === 'auth/email-already-in-use') {
    Alert.alert('Email já está em uso')
  }
  if (error.code === 'auth/invalid-email') {
    Alert.alert('Email inválido')
  }
  if (error.code === 'auth/weak-password') {
    Alert.alert('Senha muito fraca')
  }
  if (error.code === 'auth/operation-not-allowed') {
    Alert.alert('Operação não permitida')
  }
  if (error.code === 'auth/network-request-failed') {
    Alert.alert('Falha na conexão')
  }
  if (error.code === 'auth/user-not-found') {
    Alert.alert('Usuário não encontrado')
  }
  if (error.code === 'auth/wrong-password') {
    Alert.alert('Senha incorreta')
  }
  if (error.code === 'auth/user-disabled') {
    Alert.alert('Usuário desabilitado')
  }
  if (error.code === 'auth/too-many-requests') {
    Alert.alert('Muitas requisições')
  }
  if (error.code === 'auth/requires-recent-login') {
    Alert.alert('Login recente')
  }
  if (error.code === 'auth/user-token-expired') {
    Alert.alert('Token expirado')
  }
  if (error.code === 'auth/invalid-api-key') {
    Alert.alert('Chave API inválida')
  }
  if (error.code === 'auth/app-deleted') {
    Alert.alert('Aplicativo deletado')
  }
  if (error.code === 'auth/invalid-user-token') {
    Alert.alert('Token inválido')
  }
  if (error.code === 'auth/web-storage-unsupported') {
    Alert.alert('Web Storage não suportado')
  }
  if (error.code === 'auth/invalid-credential') {
    Alert.alert('Credencial inválida')
  }
}

export default errorAlert;