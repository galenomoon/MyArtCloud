import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

export default function GenericForm({ isCreateAccount }) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="E-mail" />
      {isCreateAccount && <TextInput style={styles.input} placeholder="Username" />}
      <TextInput style={styles.input} placeholder="Password" />
      {isCreateAccount ?
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Criar Conta</Text>
        </TouchableOpacity>
        :
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C3B1E1',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#000',
    backgroundColor: '#fff',
    borderWidth: 1,
    margin: 10,
    padding: 5,
    borderRadius: 5
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#000',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
});

