import React, {useState, memo} from 'react';
import { View, TextInput} from 'react-native';
import styles from './style';
import * as CONST from '../../utils/Constants';

const TextFieldComponent = memo(
  ({
    name,
    placeholder,
    onChangeText,
    isValid,
    value,
    onSubmitEditing,
    blurOnSubmit,
  }) => {
    const [field, setField] = useState({
      isFocused: false,
    });
    return (
      <View
        style={
          isValid === false
            ? [styles.container, styles.isError]
            : field.isFocused
            ? [styles.container, styles.isFocused]
            : [styles.container, styles.isBlur]
        }>
        <TextInput
          name={name}
          value={value}
          placeholder={placeholder}
          style={styles.inputField}
          onFocus={() => setField({...field, isFocused: true})}
          onBlur={() => {
            setField({...field, isFocused: false});
          }}
          secureTextEntry={name === 'password' ? true : false}
          onChangeText={onChangeText}
          keyboardType={name === 'email' ? 'email-address' : null}
          onSubmitEditing={onSubmitEditing}
          blurOnSubmit={blurOnSubmit}
        />
      </View>
    );
  },
);

export default TextFieldComponent;