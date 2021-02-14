import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {AntDesign} from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler';

const Search = ({query, onQueryChange, handleInput}) => {

    return <View style={styles.parentView}>
        <AntDesign name='search1' style={styles.icon}/>
        <TextInput style={styles.textStyle}
            value={query}
            placeholder="Search"
            onChangeText={onQueryChange}
            autoCorrect={false}
            autoCapitalize="none"
            onEndEditing={handleInput}
        />
    </View>
};

const styles = StyleSheet.create({
    parentView: {
        backgroundColor: '#ededed',
        marginHorizontal: 40,
        paddingStart: 10,
        marginVertical: 20,
        height: 50,
        borderRadius: 5,
        flexDirection: 'row',

    },
    textStyle: {
        fontSize: 18,
        marginStart: 7,
        flex: 1
    },
    icon: {
        alignSelf: 'center',
        fontSize: 28,
    }
});

export default Search;
