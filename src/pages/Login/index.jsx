import { StyleSheet, View } from 'react-native';
import GenericForm from '../../components/GenericForm';

export default function Login() {
  return (
    <View style={styles.container}>
      <GenericForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C3B1E1',
    justifyContent: 'center',
  }
});

