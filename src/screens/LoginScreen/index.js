import React from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import CustomTextField from '../../components/CustomTextField';
import styles from "./style";
import {connect} from 'react-redux';
import * as authActions from '../../actions/authActions';
import useLogin from './customHooks/useLogin';


const Login = (props) => {
  const [
    email,
    setEmail,
    onSubmit,
    emailNotValid,
    loader,
    onSignUpClick,
  ] = useLogin(props);
  return (
    <View style={styles.container}>
      <Text style={styles.blockText}>{'Github Login'}</Text>
      <CustomTextField
      name={'email'}
      value={email}
      onChangeText={(text) => setEmail(text)}
      isValid={!emailNotValid}
      placeholder={'EMAIL or USERNAME'}
      />
      <TouchableOpacity
              activeOpacity={0.5}
              onPress={onSubmit}
              style={styles.loginBtn}>
              {loader ? (
                <ActivityIndicator color={'white'} size={30} />
              ) : (
                <Text style={styles.btnText}>LOGIN</Text>
              )}
      </TouchableOpacity>
      <TouchableOpacity
              activeOpacity={0.5}
              onPress={onSignUpClick}
              style={[styles.loginBtn, styles.signUp]}>
                <Text style={styles.btnText}>{'New to Github? Sign Up.'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => ({
  signInResponse: state.authReducer.signInResponse,
  signInError: state.authReducer.signInError,
});

const mapDispatchToProps = (dispatch) => ({
  signIn: (action) => {
    return dispatch(authActions.doSignIn(action));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);