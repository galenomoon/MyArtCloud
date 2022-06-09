import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  inputArea: {
    borderWidth: 1,
    flex: 1,
    height: 200,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 2,
    fontSize: 20,
    backgroundColor: '#fff',
    textAlignVertical: 'top'
  },
  titleInput: {
    width: '100%',
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 2,
    fontSize: 20,
    backgroundColor: '#fff',
  },
  container: {
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
    width: '100%',
    height: 40,
    backgroundColor: '#6cb06b',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 4,
    marginBottom: 10,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  }
});

export default styles;