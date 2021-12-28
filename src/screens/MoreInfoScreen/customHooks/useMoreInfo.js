import {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import {resetToScreen} from '../../../services/navigationService';

export default function useHome(props) {
    const params = props.route.params;
    const [issuesData, setIssuesData] = useState([]);
    const [prData, setPrData] = useState([]);
    const [isVisble, setIsVisible] = useState(false);
    const [newIssueObject, setNewIssueObject] = useState({
        title: {
            text: '',
            isValid: true,
        },
        body: {
            text: '',
            isValid: true,
        },
    })
    useEffect(() => {
        if(params && params.user && params.repoName) {
            props.getIssues({user: params.user, repoName: params.repoName});
            props.getPR({user: params.user, repoName: params.repoName});
        }
    }, []);

    useEffect(() => {
        if(props.createIssueSuccess && newIssueObject.title.text.length) {
            Alert.alert('Issue Created Successfully');
            setIssuesData([...issuesData, props.createIssueSuccess]);
            setNewIssueObject({
                title: {
                    text: '',
                    isValid: true,
                },
                body: {
                    text: '',
                    isValid: true,
                },
            });
            setIsVisible(false);
        } 
       else if (props.createIssueError) { 
            Alert.alert(props.createIssueError.message);
        }
    },[props.createIssueSuccess , props.createIssueError])

    useEffect(() => {
        if(props.issuesData && props.issuesData.length) {
            setIssuesData([...props.issuesData]);
        } else if(props.issuesError) {
            Alert.alert(props.issuesError.message ?? 'Something went Wrong!');
        }
        if (props.prData &&  props.prData.length) {
            setPrData([...props.prData]);
        } else if(props.PRError) {
            Alert.alert(props.PRError.message ?? 'Something went Wrong!');
        }
    }, [props.issuesData, props.prData, props.issuesError, props.PRError])

    const createIssue = () => {
        let tempNewIssue = {...newIssueObject};
        if(tempNewIssue.title.text.length === 0) {
            tempNewIssue = {...tempNewIssue, title: {...tempNewIssue.title, isValid: false}};
        }
        if (tempNewIssue.body.text.length === 0) {
            tempNewIssue = {...tempNewIssue, body: {...tempNewIssue.body, isValid: false}};
        }
        if (tempNewIssue.body.isValid && tempNewIssue.title.isValid) {
            props.createAnIssue({user: params.user, repoName: params.repoName},
                {user: params.user, repoName: params.repoName, title: tempNewIssue.title.text, body: tempNewIssue.body.text});
        } else {
            setNewIssueObject({...tempNewIssue});
        }
    }

    const onModalClose = () => {
        setIsVisible(false);
        setNewIssueObject({
            title: {
                text: '',
                isValid: true,
            },
            body: {
                text: '',
                isValid: true,
            },
        });
    }

    const logout = () => {
        props.logout();
        resetToScreen('AuthScreen');
    };

  return [
    issuesData,
    prData,
    logout,
    isVisble,
    onModalClose,
    newIssueObject,
    setNewIssueObject,
    createIssue,
    setIsVisible,
  ];
}