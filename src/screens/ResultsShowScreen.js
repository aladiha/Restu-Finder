import React, {useEffect, useState} from 'react';
import { StyleSheet, Image, View, FlatList, Text}  from 'react-native';
import yelp from '../api/yelp'

const ResultsShowScreen = ({navigation}) => {

    const [result, setResult] = useState(null)
    const [errorMessage, setError] = useState('');
    const id = navigation.getParam('id');


    const getResult = async id => {
        try{
            const result = await yelp.get(`/${id}`);
            setResult(result.data);
        }catch (err){
            setError('something went wrong!');
        }
    };

    useEffect(() => {
        getResult(id);
    }, [])

    if (!result){
        return null;
    }

    return <View>
        <Text style={{fontWeight: 'bold', fontSize: 22, margin: 10}}>{result.name}</Text>
        <FlatList 
        data={result.photos}
        renderItem={({item}) => {
            return <Image
                style={styles.image}
                source={{ uri: item }}
            />
        }}
        keyExtractor={(photo) => photo}
        />
    </View>
};

const styles = StyleSheet.create({
    image: {
        width: 270,
        height: 170,
        margin: 20
    }
});

export default ResultsShowScreen;