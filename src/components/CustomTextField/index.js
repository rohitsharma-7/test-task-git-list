import React, {useState, memo} from 'react';
import { View, TextInput} from 'react-native';
import styles from './style';

const TextFieldComponent = memo(
  ({
    name,
    placeholder,
    onChangeText,
    isValid,
    value,
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
          style={name !== 'body' ? styles.inputField : styles.bodyField}
          onFocus={() => setField({...field, isFocused: true})}
          onBlur={() => {
            setField({...field, isFocused: false});
          }}
          multiline={name === 'body'}
          onChangeText={onChangeText}
          keyboardType={name === 'email' ? 'email-address' : null}
        />
      </View>
    );
  },
);

export default TextFieldComponent;