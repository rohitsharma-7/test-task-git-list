/* eslint-disable jsx-quotes */
import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import {connect} from 'react-redux';
import styles from "./style";
import useMoreInfo from './customHooks/useMoreInfo';
import * as EventActions from '../../actions/eventActions';
import * as CommonActions from '../../actions/commonActions';
import Logout from '../../components/Logout';
import CreateAnIssueModal from '../../components/CreateIssueModal';

const MoreInfo = (props) => {
  const [
    issuesData,
    prData,
    logout,
    isVisible,
    onModalClose,
    newIssueObject,
    setNewIssueObject,
    createIssue,
    setIsVisible,
  ] = useMoreInfo(props);

  const renderScene = () => {

    return (<View style={styles.flexOne}>
      <Text style={styles.issueHeading}>Issues</Text>
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
      <View style={styles.topView}>
      <Text style={styles.prText}>{'Number of PRs: '+ prData.length}</Text>
    <TouchableOpacity onPress={() => setIsVisible(true)}  style={styles.createButton}>
        <Text style={styles.createText}>{'Create An Issue'}</Text>
    </TouchableOpacity>
      </View>
      {renderScene()}
      {renderLogout()}
      <CreateAnIssueModal 
      isVisible={isVisible} 
      onClose={() => onModalClose()}
      data={newIssueObject}
      setData={(obj) => setNewIssueObject({...obj})}
      onSubmit={createIssue}
      />
    </View>
  );
};


const mapStateToProps = (state) => ({
  issuesData: state.eventReducer.issuesData,
  prData: state.eventReducer.pullRequestData,
  issuesError: state.eventReducer.issuesError,
  PRError: state.eventReducer.pullRequestError,
  createIssueSuccess: state.eventReducer.createIssueSuccess, 
  createIssueError: state.eventReducer.createIssueError,
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
  createAnIssue: (params, variables) => {
    return dispatch(EventActions.createIssueRequest(params, variables))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MoreInfo);