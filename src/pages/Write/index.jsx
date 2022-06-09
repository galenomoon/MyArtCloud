
import { View } from 'react-native';

//styles
import styles from './styles';

//components
import NoteInputText from '../../components/NoteInputText';

export default function Write() {
  return (
    <View style={styles.container}>
      <NoteInputText />
    </View>
  );
}