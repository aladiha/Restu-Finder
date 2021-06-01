import React from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import ResultsShowScreen from '../screens/ResultsShowScreen';
import ListItem from './ListItem';
import {withNavigation} from 'react-navigation';


const ResultsList = ({title, results, navigation}) => {
    if (!results.length){
        return null;
    }

    return <View style={styles.view}>
        <Text style={styles.title}>{title}</Text>
        <FlatList 
        keyExtractor={result => result.id}
        data={results}
        renderItem={({item}) => {
            return (
                <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', {id: item.id})}>
                    <ListItem item={item}/>
                </TouchableOpacity>
            );
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        disableVirtualization={true}
        />
    </View>
};

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        marginStart: 15,
    },
    view: {
    }
});

export default withNavigation(ResultsList);
