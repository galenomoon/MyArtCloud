
import { View, Text, StyleSheet } from 'react-native';

//styles
import styles from './styles';

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