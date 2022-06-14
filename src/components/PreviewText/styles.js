import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 112,
    height: 112,
    width: "auto",
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 2,
    padding: 10,
    overflow: 'hidden',
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  lastUpdate: {
    fontSize: 12,
    color: '#aaa',
  },
  rightContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  text: {
    fontSize: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
  }
});

export default styles;