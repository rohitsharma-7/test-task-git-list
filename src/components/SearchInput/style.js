import {StyleSheet} from 'react-native';
import scale from '../../utils/Scale';
import * as CONST from '../../utils/Constants';

const styles = StyleSheet.create({
  inputField: {
    width: scale(200),
    height: scale(40),
    margin: 10,
    color: 'black',
    fontSize: scale(17),
    paddingLeft: 10,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 4,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  find: {
    backgroundColor: 'black',
    height: scale(40),
    width: scale(88),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: scale(15),
    color: 'white',
    fontWeight: 'bold',
  },
  zIndexUp: {zIndex: 1000, alignItems: 'center'},
});

export default styles;
