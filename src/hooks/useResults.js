import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setError] = useState('');

    const searchApi = async searchQuery => {
        try{
            const response = await yelp.get('/search',{
                params: {
                    limit: 50,
                    term: searchQuery,
                    location: 'new york'
                }
            });
            setResults(response.data.businesses);
        }
        catch (err) {
            console.log(err);
            setError(err.errorMessage);
        }
    };

    useEffect(() => {searchApi('pizza')}, []);
    return [searchApi, results, errorMessage]
};