import { View, Text } from 'react-native';

//styles
import styles from './styles';

//utils
import Divider from '../../../utils/Divider';

export default function PreviewText({ text, theme }) {
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