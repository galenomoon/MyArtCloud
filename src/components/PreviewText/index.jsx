import { View, Text } from 'react-native';

//styles
import styles from './styles';

//utils
import Divider from '../../../utils/Divider';
import Icon from 'react-native-vector-icons/Ionicons';

export default function PreviewText({ text }) {

  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{text.title}</Text>
        {text.isLocked && <Icon name="lock-closed" size={25} color="#222" style={styles.close} />}
      </View>
      <Divider />
      <Text style={styles.text} >{text.text}</Text>
    </View>
  );
}