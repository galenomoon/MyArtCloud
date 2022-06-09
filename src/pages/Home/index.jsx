import { Text, View, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';

//utils
import texts from '../../../utils/texts';
import MyTouchableOpacity from '../../../utils/MyTouchableOpacity';

// styles
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

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
          <Text style={styles.emptyText}>Você ainda não tem textos salvos</Text>
        </View>
      }
      <MyTouchableOpacity
        fn={() => navigation.navigate("Write")}
        style={styles.newNoteBtn}
        childreen={<Icon name='add-outline' size={50} color="#FFF" />}
      />
    </View>
  );
}