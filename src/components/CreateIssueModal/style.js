import {StyleSheet} from 'react-native';
import scale from '../../utils/Scale';

const styles = StyleSheet.create({
    modalContainer: {
        margin: 0,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      formContainer: {backgroundColor: '#E6E9F2', height: scale(450), width: scale(350), borderRadius: 20},
      textHeading: {fontWeight: '900', fontSize: 18, margin: 20, color: 'black'},
      centerAlign: {alignItems: 'center' }, 
      titleText: {fontSize: 16, fontWeight: '900', marginVertical: 10, color:'black' },
      button: {backgroundColor: 'black', width: '50%', alignSelf: 'center', alignItems: 'center', 
               justifyContent: 'center', height: scale(40), borderRadius: 20},
      createText: {color: 'white', fontSize: 18, fontWeight: '600'}
});

export default styles;
