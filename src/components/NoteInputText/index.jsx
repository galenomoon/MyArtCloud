import { View, TextInput, Text } from 'react-native';

//styles
import { BsFillCheckCircleFill } from 'react-icons/bs';
import styles from './styles';

//utils
import MyTouchableOpacity from '../../../utils/MyTouchableOpacity';

export default function NoteInputText() {

  const saveText = () => (
    <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
      <BsFillCheckCircleFill size={20} color="#fff" />
      <Text style={styles.btnLabel}>Salvar</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título:</Text>
      <TextInput style={styles.titleInput} />
      <Text style={styles.label}>Texto:</Text>
      <TextInput multiline={true} numberOfLines={4} style={styles.inputArea} />
      <View>
        <MyTouchableOpacity style={styles.saveBtn} childreen={saveText()} />
      </View>
    </View>
  )
}