import { Text, View, FlatList } from 'react-native';

//utils
import texts from '../../../utils/texts';
import MyTouchableOpacity from '../../../utils/MyTouchableOpacity';

// styles
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

// navigation
import { useNavigation } from '@react-navigation/native';

//components
import PreviewText from '../../components/PreviewText';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {texts.length > 0 ?
        <FlatList
          data={texts}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <MyTouchableOpacity fn={() => navigation.navigate("Write", item)} childreen={<PreviewText text={item} />} />}
        />
        :
        <View style={{ alignItems: "center" }}>
          <Icon name='plus' size={60} color="#1fa3b8" />
          <Text style={styles.emptyText}>Você ainda não tem textos salvos</Text>
        </View>
      }
      <MyTouchableOpacity fn={() => navigation.navigate("Write")} style={styles.newNoteBtn} childreen={
        <Icon name='plus' size={60} color="#FFF" />
      } />

    </View>
  );
}