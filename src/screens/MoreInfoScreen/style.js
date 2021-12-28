import {StyleSheet, Dimensions, Platform} from 'react-native';
import scale from '../../utils/Scale';

export default StyleSheet.create({
  flexOne: {flex: 1},
  issueContainer: {height: scale(150), flex:1, marginHorizontal: 10},
  divider: {borderWidth: 1, borderColor: '#C4C4C4'},
  flexRow: {flexDirection: 'row'},
  issueName: {marginVertical: 10, fontSize: 20, fontWeight: 'bold', color: 'black'},
  issueBoldText: {marginVertical: 5, fontSize: 16, fontWeight: '500', color: 'black'},
  issueText: {marginVertical: 5, fontSize: 16, color: 'black'},
  issueHeading: {fontSize: 24, fontWeight: 'bold', marginHorizontal: 10, color: 'black'},
  topView: {flexDirection: 'row', justifyContent: "space-between", marginHorizontal: 10},
  prText: {fontWeight: 'bold', fontSize: 20, marginVertical: 10, color: 'black'},
  createButton: {alignItems: 'center', justifyContent: 'center' ,
                backgroundColor: 'black', borderWidth: 1, borderColor: 'white', 
                borderRadius: 20, width: '40%', height: 40},
  createText: {color: 'white', fontWeight: '500'},
});