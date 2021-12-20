/* eslint-disable jsx-quotes */
import React from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import CustomTextField from '../../components/CustomTextField';
import styles from "./style";
import useSignUp from './customHooks/useSignUp';


const SignUp = (props) => {
  const [
    email,
    pNotValid,
    password,
    message,
    setEmail,
    setPassword,
    onSubmit,
    onSubmitBtn,
    emailNotValid,
    loader,
    onSignUpClick,
  ] = useSignUp(props);
  return (
    <View style={styles.container}>
      <Text style={styles.blockText}>{'Sign Up On Github'}</Text>
      <CustomTextField
      name={'email'}
      value={email}
      onChangeText={(text) => setEmail(text)}
      isValid={true}
      placeholder={'EMAIL'}
      />
      <CustomTextField
      name={'password'}
      value={password}
      isValid={true}
      onChangeText={(text) => setPassword(text)}
      placeholder={'PASSWORD'}
      />
            <CustomTextField
      name={'password'}
      value={password}
      isValid={true}
      onChangeText={(text) => setPassword(text)}
      placeholder={'CONFIRM PASSWORD'}
      />
      <TouchableOpacity
              activeOpacity={0.5}
              onPress={onSubmit}
              style={styles.loginBtn}>
              {loader ? (
                <ActivityIndicator color={'white'} size={30} />
              ) : (
                <Text style={styles.btnText}>Sign Up</Text>
              )}
      </TouchableOpacity>
      <TouchableOpacity
              activeOpacity={0.5}
              onPress={onSignUpClick}
              style={[styles.loginBtn, styles.signUp]}>
                <Text style={styles.btnText}>{'Already have an account? Login!'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;