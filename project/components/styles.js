import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
  containerApp: {
    flex: 1,
    backgroundColor: 'rgb(242, 255, 255)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navbar: {
    backgroundColor: 'rgb(242, 255, 255)',
    height: 120,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 20,
    paddingTop: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerForm: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15
  },
  containerModal: {
    flex: 1,
    backgroundColor: 'rgb(242,255,255)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 34,
    color: '#073064',
    fontWeight: '800',
    marginRight: 40,
  },
  backToLoginText: {
    color: '#fb5b5a',
    fontSize: 11,
  },
  signUpBtn: {
    color: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },

  containerHome: {
    flex: 1,
    backgroundColor: 'rgb(242, 255, 255)',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  centerAlign: {
    flex: 1,
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#14BFB3',
    borderRadius: 5,
    paddingVertical: 6,
    paddingHorizontal: 12,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 4,
  },
  addButtonLabel: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    borderRadius: 5,
    //marginVertical: 5,
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: 20,
  },


});