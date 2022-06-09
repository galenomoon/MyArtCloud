import { View, Text, StyleSheet } from 'react-native';

//utils
import Divider from '../../../utils/Divider';

export default function PreviewText({ text }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{text.title}</Text>
        <Divider/>
      </View>
      <Text style={styles.text} >{text.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 112,
    backgroundColor: '#fff',
    alignItems: 'start',
    margin: 10,
    borderRadius: 2,
    padding: 10,
    overflow: 'hidden',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
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
