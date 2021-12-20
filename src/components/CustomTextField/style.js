import {StyleSheet} from 'react-native';
import scale from '../../utils/Scale';

const styles = StyleSheet.create({
  container: {
    height: scale(50),
    backgroundColor: 'white',
    borderWidth: 1,
    paddingHorizontal: 20,
    color: 'black',
    fontSize: 18,
    marginVertical: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    width: '70%',
  },
  isBlur: {
    borderColor: 'black',
  },
  isError: {
    borderColor: 'red',
  },
  isFocused: {
    borderColor: 'powderBlue',
  },
  inputField: {
    width: '70%',
    color: 'black',
    fontSize: 14,
  },
});

export default styles;
