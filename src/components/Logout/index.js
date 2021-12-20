import React, {memo} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './style';


export default memo(
  ({
    onPress,
  }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={onPress}
        style={styles.container}
        >
        <Text style={styles.text}>{'Logout'}</Text>
      </TouchableOpacity>);
   
  },
);