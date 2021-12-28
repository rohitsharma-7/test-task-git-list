import {useState, useEffect} from 'react';
import {navigateToScreen, resetToScreen} from '../../../services/navigationService';
import {sortArray, modifyRepoArray} from '../../../utils/helper';
import {useIsFocused} from '@react-navigation/native';

export default function useHome(props) {
    const userData = props.userData;
    const [repoData, setRepoData] = useState([]);
    const [sorted, setSorted] = useState(false);
    const [subscribedId, setSubscribedId] = useState(null);
    const isFocused = useIsFocused();
    useEffect(() => { 
        if(userData && userData?.login) {
            props.getRepos(userData?.login);
        }
    }, [isFocused]);

    const subscribe = (repo) => {
            setSubscribedId(repo.id);
            props.subscribeToWatch({
                user: userData.login,
                repoName: repo.name,
            });
    };
    useEffect(() => {
        if (sorted) {
            let temp = [...modifyRepoArray([...props.reposData], props.subscribedRepos)];
            temp = sortArray([...temp]);
            setRepoData([...temp]);
        } else if (!sorted && repoData.length) {
            let temp = [...modifyRepoArray([...props.reposData], props.subscribedRepos)];
            setRepoData([...temp]);
        }
    }, [sorted])

    useEffect(() => {
        if(props.reposData && props.reposData.length) {
            let temp = [...modifyRepoArray([...props.reposData], props.subscribedRepos)];
            setRepoData([...temp]);
        }
    }, [props.reposData])

    const onRepoPress = (repo) => {
        navigateToScreen('MoreInfoScreen', props.navigation, {user: userData?.login, repoName: repo?.name});
    };

    useEffect(() => {
        if(props.subscription && props.reposData) {
                props.addToSubscribedRepo([...props.subscribedRepos,subscribedId]);
                let temp = [...modifyRepoArray([...props.reposData], [...props.subscribedRepos, subscribedId])];
                setSubscribedId(null);
                setRepoData([...temp]);
        }
    }, [props.subscription]);

    const logout = () => {
        props.logout();
        resetToScreen('AuthScreen');
    };

  return [
    repoData,
    onRepoPress,
    setRepoData,
    logout,
    subscribe,
    sorted,
    setSorted,
  ];
}
