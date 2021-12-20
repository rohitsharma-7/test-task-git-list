import { StyleSheet } from 'react-native';
import scale from '../../utils/Scale';

const styles = StyleSheet.create({
    container: { width: '100%', backgroundColor: 'black', height: scale(50), alignItems: 'center', justifyContent: 'center' },
    text: {fontWeight: '900', color: 'white', fontSize: 20},
});

export default styles;