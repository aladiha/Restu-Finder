import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Search from '../compnents/SearchBar';
import useResults from '../hooks/useResults';
import Resultslist from '../compnents/ResultsList';

const SearchScreen = () => {
    const [query, setQuery] = useState('');
    const [searchApi, results, errorMessage] = useResults();


    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price;
        });
    };

    return <> 
        <Search 
            query={query} 
            onQueryChange={setQuery}
            handleInput={() => searchApi(query)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <ScrollView>
            <Resultslist results={filterResultsByPrice('$')} title="Cost Effictive"/>
            <Resultslist results={filterResultsByPrice('$$')} title="Bit Pricier"/>
            <Resultslist results={filterResultsByPrice('$$$')} title="Big Spender!"/>
        </ScrollView>
    </>
};

const styles = StyleSheet.create({
    
});


export default SearchScreen;