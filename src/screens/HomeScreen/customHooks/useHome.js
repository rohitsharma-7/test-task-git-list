import {useState, useEffect} from 'react';
import {navigateToScreen, resetToScreen} from '../../../services/navigationService';

export default function useHome(props) {
    const userData = props.userData;
    const [repoData, setRepoData] = useState([]);
    useEffect(() => {
        if(userData && userData?.login) {
            props.getRepos(userData?.login);
        }
    }, []);

    useEffect(() => {
        if(props.reposData && props.reposData.length) {
            setRepoData([...props.reposData]);
        }
    }, [props.reposData])

    const onRepoPress = (repo) => {
        navigateToScreen('MoreInfoScreen', props.navigation, {user: userData?.login, repoName: repo?.name});
    };

    const logout = () => {
        props.logout();
        resetToScreen('AuthScreen');
    };

  return [
    repoData,
    onRepoPress,
    setRepoData,
    logout,
  ];
}
