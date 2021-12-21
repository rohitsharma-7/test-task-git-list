/* eslint-disable jsx-quotes */
import React from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import SearchInput from '../../components/SearchInput';
import {connect} from 'react-redux';
import useHome from './customHooks/useHome';
import * as EventActions from '../../actions/eventActions';
import * as CommonActions from '../../actions/commonActions';
import Logout from '../../components/Logout';
import styles from "./style";
import * as CONST from '../../utils/Constants';
const HomeScreen = (props) => {

  const [
    reposData,
    onRepoPress,
    setRepoData,
    logout,
    subscribe,
    sorted,
    setSorted,
  ] = useHome(props);

  const renderScene = () => {
    return (<View style={styles.flexOne}>
      <FlatList
        data={reposData}
        numColumns={1}
        renderItem={({item}) => renderRepository(item)}
        />
    </View>);
  };

  const renderRepository = (repo) => {
    let date = new Date(repo.created_at);
     date = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();

    return (
      <TouchableOpacity onPress={() => onRepoPress(repo)} activeOpacity={0.8} style={styles.repoContainer}>
        <View style={styles.divider} />
        <View style={[styles.flexRow, {justifyContent: 'space-between'}]}>
        <Text style={styles.repoName}>{repo?.name}</Text>
        <TouchableOpacity onPress={() => subscribe(repo)} style={{margin: 10}}>
            <Image source={repo.isSubscribed ? CONST.GOLD_STAR_ICON :CONST.STAR_ICON} style={styles.watchListIcon}  />
        </TouchableOpacity>
        </View>
        <View style={styles.flexRow}>
        <Text style={styles.repoBoldText}>{'Number Of Open Issues: '}</Text>
        <Text style={styles.repoText}>{repo?.open_issues_count}</Text>
        </View>
        <View style={styles.flexRow}>
        <Text style={styles.repoBoldText}>{'Number Of Watchers: '}</Text>
        <Text style={styles.repoText}>{repo?.watchers}</Text>
        </View>
        <View style={styles.flexRow}>
        <Text style={styles.repoBoldText}>{'Created on: '}</Text>
        <Text style={styles.repoText}>{date}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  const renderLogout = () => {
    return (
      <View style={styles.logoutContainer}>
        <Logout onPress={() => logout()}  />
      </View>
    );
  };

  return (
    <View style={styles.flexOne}>
      <View style={styles.topView}>
      <SearchInput 
        data={reposData}
        setSearchResultData={setRepoData}
      />
      <TouchableOpacity onPress={() => setSorted(!sorted)} style={[styles.sortingButton, sorted ? styles.borderGreen : null]}>
        <Image source={CONST.SORT_ICON} style={[styles.sortingIcon ,sorted ? styles.tint : null]} />
      </TouchableOpacity>
      </View>
      {renderScene()}
      {renderLogout()}
    </View>
  );
};

const mapStateToProps = (state) => ({
  userData: state.authReducer.signInResponse,
  reposData: state.eventReducer.reposData,
  subscription: state.eventReducer.subscription,
  subscriptionError: state.eventReducer.subscriptionError,
  subscribedRepos: state.commonReducer.subscribedRepos, 
});

const mapDispatchToProps = (dispatch) => ({
  getRepos: (username) => {
    return dispatch(EventActions.getRepoRequest(username));
  },
  logout: () => {
    return dispatch(CommonActions.logout());
  },
  subscribeToWatch: (params) => {
    return dispatch(EventActions.subscriptionRequest(params))
  },
  addToSubscribedRepo: (subscribedReposUpdated) => {
    return dispatch(CommonActions.addSubscribedRepo(subscribedReposUpdated))
  },
  removeSubscribedRepo: (subscribedReposUpdated) => {
    return dispatch(CommonActions.removeSubscribedRepo(subscribedReposUpdated))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);