import {StyleSheet, Dimensions, Platform} from 'react-native';
import scale from '../../utils/Scale';
const {width, height} = Dimensions.get('screen');


export default StyleSheet.create({
  flexOne: {flex: 1},
  repoContainer: {height: scale(130), flex:1, marginHorizontal: 10},
  divider: {borderWidth: 1, borderColor: '#C4C4C4'},
  flexRow: {flexDirection: 'row'},
  repoName: {marginVertical: 10, fontSize: 20, fontWeight: 'bold', color: 'black'},
  repoBoldText: {marginVertical: 5, fontSize: 16, fontWeight: '500', color: 'black'},
  repoText: {marginVertical: 5, fontSize: 16, color: 'black'},
  logoutContainer: {position: 'absolute', bottom: 0, flex: 1, width: '100%'},
  watchListIcon: {height: scale(25), width: scale(25), tintColor: 'black'},
  topView: {flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, alignItems: 'center'},
  sortingButton: {borderRadius: 5, borderColor: 'black', borderWidth: 1, alignItems: 'center', justifyContent: 'center', height: scale(40), width: '10%', tintColor: 'black'},
  borderGreen: {borderColor: 'green'},
  sortingIcon: {height: scale(25), width: scale(25), tintColor: 'black'},
  tint: {tintColor: 'green'},
});