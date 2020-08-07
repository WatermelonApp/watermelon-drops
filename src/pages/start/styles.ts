import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2e86de',
  },

  title: {
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f5f6fa',
  },

  description: {
    margin: 10,
    textAlign: 'center',
    fontSize: 15,
    color: '#c8d6e5',
  },

  button: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 30,
    borderRadius: 50,
    backgroundColor: '#2f3640',
  },

  buttonText: {
    color: '#f5f6fa',
  },
});

export default styles;
