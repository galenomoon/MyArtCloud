import { View, Text } from 'react-native';

//styles
import styles from './styles';

//utils
import Divider from '../../../utils/Divider';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function PreviewText({ text }) {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{text.title}</Text>
        <View style={styles.rightContainer}>
          {text.isLocked && <Icon name="lock" size={25} color="#333" style={{ margin: 5 }} />}
          <Text style={styles.lastUpdate}>{text.lastUpdate}</Text>
        </View>
      </View>
      <Divider />
      <Text style={{ fontSize: 20 }} >{text.text}</Text>
    </View>
  );
}