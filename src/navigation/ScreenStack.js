import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import Login from '../screens/LoginScreen';
import SignUp from '../screens/SignUp';
import MoreInfoScreen from '../screens/MoreInfoScreen';

const ScreensStack = createStackNavigator();

const MyHomeStack = () => {
  return (
    <ScreensStack.Navigator
      screenOptions={{
        headerShown: true,
      }}>
      <ScreensStack.Screen
        name="HomeScreen"
        component={HomeScreen}
      />
    <ScreensStack.Screen name="MoreInfoScreen" component={MoreInfoScreen} />
    </ScreensStack.Navigator>
  );
};


const AuthStack = () => {
  return (
    <ScreensStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <ScreensStack.Screen name="LoginScreen" component={Login} />
      <ScreensStack.Screen name="SignUpScreen" component={SignUp} />
    </ScreensStack.Navigator>
  );
};

const MainScreen = () => {
  return (
    <ScreensStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <ScreensStack.Screen name="AuthScreen" component={AuthStack} />
      <ScreensStack.Screen name="HomeScreens" component={MyHomeStack} />
 
    </ScreensStack.Navigator>
  );
};
export default MainScreen;