import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerForm: {
    backgroundColor: '#C3B1E1',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },  
  container: {
    flex:1,
    backgroundColor: '#C3B1E1',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#000',
    backgroundColor: '#fff',
    borderWidth: 1,
    margin: 10,
    padding: 5,
    borderRadius: 5,
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
    fontSize: 16,
    margin: 0,
    padding: 0
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    margin: 10,
    color: '#FFF',
    textShadowColor: '#000',
    textShadowRadius: 2,
  }
});

export default styles;