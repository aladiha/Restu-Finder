import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';


const ListItem = ({item}) => {
    return <View style={styles.container}>
        
        {item.image_url ? <Image style={styles.image} source={{uri: item.image_url}}/> : null}
        <Text style={styles.name}>{item.name}</Text> 
        <Text style={styles.describtion}>{item.rating} Stars, {item.review_count} Reviews</Text>

    </View>
};


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginBottom: 10,
    },
    image: {
        height: 150,
        width: 300,
        borderRadius: 4,
        marginHorizontal: 4
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
        marginVertical: 5,
        marginStart: 5
    },
    describtion: {
        color: 'gray',
        fontWeight: 'bold',
        marginStart: 5
    }
});

export default ListItem;