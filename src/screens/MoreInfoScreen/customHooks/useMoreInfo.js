import {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import {resetToScreen} from '../../../services/navigationService';

export default function useHome(props) {
    const params = props.route.params;
    const [issuesData, setIssuesData] = useState([]);
    const [prData, setPrData] = useState([]);
    useEffect(() => {
        if(params && params.user && params.repoName) {
            props.getIssues({user: params.user, repoName: params.repoName});
            props.getPR({user: params.user, repoName: params.repoName});
        }
    }, []);


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

    const logout = () => {
        props.logout();
        resetToScreen('AuthScreen');
    };

  return [
    issuesData,
    prData,
    logout,
  ];
}