import {useState, useEffect, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {navigateToScreen} from '../../../services/navigationService';
let counter = 0;

export default function useSignUp( props) {
  const navigation = useNavigation();
  const [email, setEmail] = useState({
    emailValue: '',
    emValid: 'null',
  });
  const [message, setMessage] = useState(null);
  const [password, setPassword] = useState('');
  const [pNotValid, setPNotValid] = useState(false);
  const [emailNotValid, setEmailNotValid] = useState(false);
  const [loader, setLoader] = useState(false);

  const onSubmitBtn = () => {
  };

  useEffect(() => {
    setPassword();
  }, []);

  useEffect(() => {

  }, []);



  ////////////////// event /////////////////////



  const onSignUpClick = () => {
    navigateToScreen('LoginScreen', props.navigation, {});
  }

  const onSubmit = () => {
  
    setLoader(true);
    let loginData = {
      email: email.emailValue.toLowerCase(),
      password: password,
    };
  };

  ////////////////////// end of events ///////////////

  return [
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
  ];
}
