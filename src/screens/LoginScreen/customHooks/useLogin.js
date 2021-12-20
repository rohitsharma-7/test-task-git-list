import {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {navigateToScreen, resetToScreen, setTopLevelNavigator} from '../../../services/navigationService';
let counter = 0;

export default function useLogin( props) {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);
  const [emailNotValid, setEmailNotValid] = useState(false);
  const [loader, setLoader] = useState(false);
  setTopLevelNavigator(props.navigation); // Saving navigation state to redirect on respective screen if notification comes or any top level event

useEffect(() => {
 if (message && message.length) {
   setLoader(false);
   Alert.alert(message);
 }
}, [message])

  useEffect(() => {
    if(props.signInResponse && props.signInResponse?.id) {
      setLoader(false);
      resetToScreen('HomeScreens');
      } else if(props.signInError) {
        setMessage(props.signInError?.message);
        setLoader(false);
      }
  }, [props.signInResponse, props.signInError]);

  ////////////////// event /////////////////////

  const onSignUpClick = () => {
    navigateToScreen('SignUpScreen', props.navigation, {});
  }

  const onSubmit = () => {
    if (loader) {
      return;
    }
    if (email === '') {
      setEmailNotValid(true);
      setMessage({
        data: {
          message: 'Invalid email',
        },
      });
      return;
    }
    setEmailNotValid(false);
    setLoader(true);
    props.signIn({email: email});
  };

  ////////////////////// end of events ///////////////

  return [
    email,
    setEmail,
    onSubmit,
    emailNotValid,
    loader,
    onSignUpClick,
  ];
}
