/**
 * Navigation service will help in Navigations
 * We have Route navigation here for performing root level navigations
 * common functions for navigate, back for Stack
 * Drawer Navigation functions
 */
import {CommonActions} from '@react-navigation/native';

let navigator;

/**
 * This function is called when the RootScreen is created to set the navigator instance to use anywhere.
 */
export function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}

/**
 * Call this function when you want to navigate to a specific route.
 *
 * @param name The name of the route to navigate. Routes are defined in ScreenStack using createStackNavigator()
 * @param params Route parameters.
 */

export function navigateToScreen(route, currNavigation, _params) {
  const navigateAction = CommonActions.navigate({
    name: route,
    params: _params,
  });
  currNavigation.dispatch(navigateAction);
}

export function resetToScreen(screen) {
  navigator.dispatch(
    CommonActions.reset({index: 0, routes: [{name: screen}]}),
  );
}
