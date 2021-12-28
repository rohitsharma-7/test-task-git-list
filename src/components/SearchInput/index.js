import React, {useState, memo, useEffect} from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import {modifyRepoArray} from '../../utils/helper';
import styles from './style';

const InputField = memo(
  ({name, testID, data, setSearchResultData, baseData, subscribedRepos}) => {
    const [seachFeildText, setSearchFieldText] = useState('');
    const [searched, setSearched] = useState(false);

    useEffect(() => {
      if(seachFeildText.length === 0) {
        setSearched(false);
        search(seachFeildText);
      }
    },[seachFeildText])

    const search = (textCur) => {
      setSearchFieldText(textCur);
      let searchResultArray = [];
      if (textCur.length !== 0 && data) {
          setSearched(true);
          setSearchResultData([]);
        data.map((item, index) => {
            if(item.name.toLowerCase().includes(textCur.toLowerCase())) {
                searchResultArray.push(item);
            }
        });
        setSearchResultData([...searchResultArray]);
      } else if(seachFeildText.length === 0 && searched) {
        setSearchResultData([...modifyRepoArray(baseData, subscribedRepos)]);
      }
    };

    return (
      <View style={styles.zIndexUp}>
        <View style={styles.searchBar}>
          <TextInput
            testID={testID}
            name={name}
            value={seachFeildText}
            placeholder={'Search...'}
            style={styles.inputField}
            placeholderTextColor={'grey'}
            onChangeText={(textCur) => setSearchFieldText(textCur)}
          />
          <TouchableOpacity
            disabled={data && seachFeildText.length > 0 ? false : true}
            style={styles.find}
            activeOpacity={0.8}
            onPress={() => {
                search(seachFeildText);
            }}>
            <Text style={styles.buttonText}>{'Find'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  },
);

export default InputField;