
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#C3B1E1',
    // alignItems: 'center',
    justifyContent: 'center'
  },
  newNoteBtn: {
    flex: 1,
    position: 'absolute',
    bottom: 20,
    right: 20,
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
  logoutBtn: {
    flex: 1,
    position: 'absolute',
    bottom: 20,
    borderRadius: 100,
    marginLeft: 20,
    width: 60,
    height: 60,
    backgroundColor: '#c74444',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#171717',
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  emptyText:{
    fontSize: 20,
    color: '#fff',
    padding: 20,
    textAlign: 'center',
  }
});

export default styles;