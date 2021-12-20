/* eslint-disable jsx-quotes */
import React from "react";
import { View, Text, FlatList } from "react-native";
import {connect} from 'react-redux';
import styles from "./style";
import useMoreInfo from './customHooks/useMoreInfo';
import * as EventActions from '../../actions/eventActions';
import * as CommonActions from '../../actions/commonActions';
import Logout from '../../components/Logout';

const MoreInfo = (props) => {
  const [
    issuesData,
    prData,
    logout,
  ] = useMoreInfo(props);

  const renderScene = () => {

    return (<View style={styles.flexOne}>
      <Text style={{fontSize: 24, fontWeight: 'bold', marginHorizontal: 10}}>Issues</Text>
      <FlatList
        data={issuesData}
        numColumns={1}
        renderItem={({item, index}) => renderIssues(item)}
        />
    </View>);
  };

  const renderIssues = (issue) => {
    let date = new Date(issue.updated_at);
     date = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
    return (
      <View style={styles.issueContainer}>
        <View style={styles.divider} />
        <View style={styles.flexRow}>
        <Text numberOfLines={1} style={styles.issueName}>{issue?.title}</Text>
        </View>
        <View style={styles.flexRow}>
        <Text style={styles.issueBoldText}>{'Issue ID: '}</Text>
        <Text style={styles.issueText}>{issue?.id}</Text>
        </View>
        <View style={styles.flexRow}>
        <Text style={styles.issueBoldText}>{'Created By: '}</Text>
        <Text style={styles.issueText}>{issue?.user?.login}</Text>
        </View>
        <View style={styles.flexRow}>
        <Text style={styles.issueBoldText}>{'Last Updated on: '}</Text>
        <Text style={styles.issueText}>{date}</Text>
        </View>
        <View style={styles.divider} />
      </View>
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
      <Text style={{fontWeight: 'bold', fontSize: 20, alignSelf: 'center', marginVertical: 10}}>{'Number of PRs: '+ prData.length}</Text>
      {renderScene()}
      {renderLogout()}
    </View>
  );
};


const mapStateToProps = (state) => ({
  issuesData: state.eventReducer.issuesData,
  prData: state.eventReducer.pullRequestData,
  issuesError: state.eventReducer.issuesError,
  PRError: state.eventReducer.pullRequestError,
});

const mapDispatchToProps = (dispatch) => ({
  getIssues: (params) => {
    return dispatch(EventActions.getIssuesRequest(params));
  },
  getPR: (params) => {
    return dispatch(EventActions.getPRRequest(params));
  },
  logout: () => {
    return dispatch(CommonActions.logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MoreInfo);