import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, View, FlatList, Text, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import yelp from '../api/yelp'
import MapView, { Marker } from 'react-native-maps';


const { width, height } = Dimensions.get('window');
const ResultsShowScreen = ({ navigation }) => {

    const [result, setResult] = useState(null)
    const [errorMessage, setError] = useState('');
    const id = navigation.getParam('id');


    const getResult = async id => {
        try {
            const result = await yelp.get(`/${id}`);
            setResult(result.data);
        } catch (err) {
            setError('something went wrong!');
        }
    };

    useEffect(() => {
        getResult(id);
    }, [])

    if (!result) {
        return null;
    }

    return <View>
        <Text style={{ fontWeight: 'bold', fontSize: 22, margin: 10 }}>{result.name}</Text>
        <FlatList
            style={{ margin: 10, borderRadius: 10 }}
            data={result.photos}
            renderItem={({ item }) => {
                return <Image
                    style={styles.image}
                    source={{ uri: item }}
                />
            }}
            keyExtractor={(photo) => photo}
            horizontal
        />

        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 10, marginStart: 10 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16, width: 70 }}>Phone </Text>
            <Text style={{ color: 'gray', fontSize: 14, marginStart: 10 }}>{result.phone}</Text>
        </View>

        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 10, marginStart: 10 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16, width: 70 }}>City </Text>
            <Text style={{ color: 'gray', fontSize: 14, marginStart: 10 }}>{result.location.city}</Text>
        </View>

        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 10, marginStart: 10 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16, width: 70 }}>Addres </Text>
            <Text style={{ color: 'gray', fontSize: 14, marginStart: 10 }}>{result.location.address1}</Text>
        </View>
        <View style={{ borderTopWidth: 0.5, borderColor: '#e3e3e3', display: 'flex', alignItems: 'center', flexDirection: 'row', marginTop: 10, paddingTop: 10, marginStart: 10 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16, width: 70 }}>Ratings </Text>
            {
                Array(Math.ceil(result.rating)).fill(0).map((item, index) => {
                    return <Icon name="star" type="font-awesome" key={index.toString()} color="gold" size={20} />
                })
            }

            {
                Array(5 - Math.ceil(result.rating)).fill(0).map((item, index) => {
                    return <Icon name="star-o" type="font-awesome" key={index.toString()} color="gold" size={20} />
                })
            }
            <Text style={{ fontSize: 12, marginStart: 10 }}>({result.review_count})</Text>
        </View>

        {
            result.coordinates && result.coordinates.latitude && result.coordinates.longitude ?
                <MapView
                    region={{
                        latitude: result.coordinates.latitude,
                        longitude: result.coordinates.longitude,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01
                    }}
                    style={{ width, height: 300, marginTop: 30 }}>
                    <Marker
                        title={result.location.city}
                        description={result.location.address1}
                        coordinate={{
                            latitude: result.coordinates.latitude,
                            longitude: result.coordinates.longitude
                        }} />

                </MapView> : null
        }
    </View>
};

const styles = StyleSheet.create({
    image: {
        width: 270,
        height: 170,
        marginEnd: 10,
        borderRadius: 10,

    },

});

export default ResultsShowScreen;