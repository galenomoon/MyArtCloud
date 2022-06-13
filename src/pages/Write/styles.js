import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: 'bold',
    padding: 10,
    borderBottomColor: '#ccc',
    backgroundColor: '#eee',
    borderBottomWidth: 0.5,
    marginBottom: 10,
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
    textAlignVertical: 'top',

  },
  inputArea: {
    flex: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 2,
    height: 900,
    fontSize: 20,
    textAlignVertical: 'top',

  },
  titleInput: {
    width: '100%',
    borderColor: '#000',
    padding: 10,
    marginBottom: 10,
    borderRadius: 2,
    fontSize: 30,
  },
  containerForm: {
    flex: 1,
    width: '90%',
    justifyContent: 'flex-start',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 2,
    width: '100%',
  },
  btnLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    width: '100%',
    color: '#fff',
    marginHorizontal: 6,
  },
  saveBtn: {
    flex: 1,
    position: 'absolute',
    bottom: 20,
    right: 25,
    borderRadius: 100,
    width: 60,
    height: 60,
    backgroundColor: '#1fa3b8',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#171717',
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default styles;