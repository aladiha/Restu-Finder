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
            setError('something went wrong');
        }
    };

    useEffect(() => {searchApi('pasta')}, []);
    return [searchApi, results, errorMessage]
};