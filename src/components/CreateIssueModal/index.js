import React, {memo} from 'react';
import { View, Text, TextInput, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import CustomTextField from '../../components/CustomTextField';
import styles from './style';

const CreatIssueModal = memo(
  ({
    isVisible,
    onClose,
    data,
    setData,
    onSubmit,
  }) => {

    const renderForm = () => {
        return (
            <View style={styles.formContainer}>
                <Text style={styles.textHeading}>{'Create An Issue'}</Text>
                <View style={styles.centerAlign}>
                    <Text style={styles.titleText}>{'Title'}</Text>
                    <CustomTextField 
                              name={'title'}
                              value={data.title?.text}
                              onChangeText={(text) => setData({...data, title: {...data.title, text: text}})}
                              isValid={data.title.isValid}
                              placeholder={'Title'}
                     />
                </View>
                <View style={styles.centerAlign}>
                    <Text style={styles.titleText}>{'Body'}</Text>
                    <CustomTextField 
                              name={'body'}
                              value={data.body?.text}
                              onChangeText={(text) => setData({...data, body: {...data.body, text: text}})}
                              isValid={data.body.isValid}
                              placeholder={'Body'}
                     />
                </View>
                <TouchableOpacity onPress={() => onSubmit(data)} style={styles.button}>
                    <Text style={styles.createText}>{'Create'}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <Modal
        isVisible={isVisible}
        animationIn={'slideInUp'}
        animationInTiming={500}
        swipeDirection={['down']}
        backdropColor={'rgba(0, 0, 0, 0.9)'}
        onBackdropPress={() => onClose()}
        onBackButtonPress={() => onClose()}
        style={styles.modalContainer}>
            {renderForm()}
      </Modal>
    );
  },
);

export default CreatIssueModal;