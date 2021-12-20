import {StyleSheet, Dimensions, Platform} from 'react-native';
import scale from '../../utils/Scale';
const {width, height} = Dimensions.get('screen');


export default StyleSheet.create({
  flexOne: {flex: 1},
  repoContainer: {height: scale(150), flex:1, marginHorizontal: 10},
  divider: {borderWidth: 1, borderColor: '#C4C4C4'},
  flexRow: {flexDirection: 'row'},
  repoName: {marginVertical: 10, fontSize: 20, fontWeight: 'bold'},
  repoBoldText: {marginVertical: 5, fontSize: 16, fontWeight: '500'},
  repoText: {marginVertical: 5, fontSize: 16},
  logoutContainer: {position: 'absolute', bottom: 0, flex: 1, width: '100%'},
});