
import { View, Text, StyleSheet } from 'react-native';

//components
import NoteInputText from '../../components/NoteInputText';

export default function Write() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}></Text>
      </View>
      <NoteInputText />
      <Text style={styles.text} ></Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C3B1E1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
    width: '100%',
  },
  text: {
    fontSize: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
    width: '100%',
  }
});
