import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },

  sky: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 900,
    height: 500,
    borderBottomLeftRadius: 1000,
    borderBottomRightRadius: 1000,
    backgroundColor: '#192a56',
  },

  image: {
    backgroundColor: '#f5f6fa',
    borderRadius: 100,
    width: 150,
    height: 150,
  },

  title: {
    color: '#f5f6fa',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
    fontSize: 20,
  },

  description: {
    color: '#c8d6e5',
    textAlign: 'center',
    margin: 10,
    fontSize: 15,
  },

  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2f3640',
    margin: 10,
    width: 100,
    height: 30,
    borderRadius: 50,
  },

  buttonText: {
    color: '#f5f6fa',
  },
});

export default styles;
