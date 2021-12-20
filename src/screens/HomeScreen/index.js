/* eslint-disable jsx-quotes */
import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import SearchInput from '../../components/SearchInput';
import {connect} from 'react-redux';
import useHome from './customHooks/useHome';
import * as EventActions from '../../actions/eventActions';
import * as CommonActions from '../../actions/commonActions';
import Logout from '../../components/Logout';
import styles from "./style";
const HomeScreen = (props) => {

  const [
    reposData,
    onRepoPress,
    setRepoData,
    logout
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
    let date = new Date(repo.updated_at);
     date = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
    return (
      <TouchableOpacity onPress={() => onRepoPress(repo)} activeOpacity={0.8} style={styles.repoContainer}>
        <View style={styles.divider} />
        <View style={styles.flexRow}>
        <Text style={styles.repoName}>{repo?.name}</Text>
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
        <Text style={styles.repoBoldText}>{'Last Updated on: '}</Text>
        <Text style={styles.repoText}>{date}</Text>
        </View>
        <View style={styles.divider} />
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
      <SearchInput 
        data={props.reposData}
        setSearchResultData={setRepoData}
      />
      {renderScene()}
      {renderLogout()}
    </View>
  );
};

const mapStateToProps = (state) => ({
  userData: state.authReducer.signInResponse,
  reposData: state.eventReducer.reposData,
});

const mapDispatchToProps = (dispatch) => ({
  getRepos: (username) => {
    return dispatch(EventActions.getRepoRequest(username));
  },
  logout: () => {
    return dispatch(CommonActions.logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);