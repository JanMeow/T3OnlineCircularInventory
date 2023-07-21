import { createContext, useState } from "react";


const searchMode =  {
    searchByDimension : 'searchByDimension',
    searchByPrice: 'searchByPrice',
    searchByQuantity: 'searchByQuantity',
    searchByName: 'searchByName'
}


export const SearchContext = createContext({
    searchField: ""
});




export const SearchProvider = ({children})=>{
    const [searchField, setSearchField] = useState('');
    const [searchType, setSearchType] = useState('')
    const value = {searchField, setSearchField, searchType, setSearchType};

    return(
        <SearchContext.Provider value = {value}>
            {children}
        </SearchContext.Provider>
    );
};