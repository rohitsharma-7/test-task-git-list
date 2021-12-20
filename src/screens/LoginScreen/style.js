import {StyleSheet, Dimensions} from 'react-native';
import scale from '../../utils/Scale';
const {height} = Dimensions.get('screen');


export default StyleSheet.create({

container: {
    height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blockText: {fontSize: scale(14), fontWeight: 'bold', alignSelf: 'center'},
  btnText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  loginBtn: {
    backgroundColor: 'black',
    height: scale(50),
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 10,
  },
});