import {StyleSheet, Dimensions, Platform} from 'react-native';
import scale from '../../utils/Scale';

export default StyleSheet.create({
  flexOne: {flex: 1},
  issueContainer: {height: scale(150), flex:1, marginHorizontal: 10},
  divider: {borderWidth: 1, borderColor: '#C4C4C4'},
  flexRow: {flexDirection: 'row'},
  issueName: {marginVertical: 10, fontSize: 20, fontWeight: 'bold'},
  issueBoldText: {marginVertical: 5, fontSize: 16, fontWeight: '500'},
  issueText: {marginVertical: 5, fontSize: 16},
});