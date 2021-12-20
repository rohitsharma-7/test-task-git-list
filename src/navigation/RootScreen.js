import React, {Component} from 'react';
import {StatusBar, StyleSheet, View, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainScreen from './ScreenStack';
import SafeAreaView from 'react-native-safe-area-view';
import {connect} from 'react-redux';
import {HEADER_COLOR, BLACK_COLOR, DARK_GREY_COLOR} from '../utils/Constants';
import {getStatusBarHeight} from '../utils/Scale';


class RootScreen extends Component {

  renderLoader() {
    return (
      <View style={styles.loader}>
        <ActivityIndicator color={DARK_GREY_COLOR} size={35} />
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView
        style={styles.container}
        forceInset={{top: 'never', bottom: 'never'}}>
        <View style={styles.StatusBar}>
          <StatusBar barStyle="light-content" backgroundColor={HEADER_COLOR} />
        </View>
        <NavigationContainer>
          <MainScreen />
          {this.props.isLoading && this.renderLoader()}
        </NavigationContainer>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  StatusBar: {
    height: getStatusBarHeight(true),
    backgroundColor: HEADER_COLOR,
    width: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: BLACK_COLOR,
  },
  loader: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

const mapStateToProps = (state) => ({
  isLoading: state.commonReducer.isLoading,
});


export default connect(mapStateToProps)(RootScreen);
