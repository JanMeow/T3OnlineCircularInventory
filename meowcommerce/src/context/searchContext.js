import { createContext, useReducer} from "react";






export const SEARCH_ACTION_TYPES = {
    'SET_SEARCH_FIELD':'SET_SEARCH_FIELD',
    'SET_SEARCH_TYPE':'SET_SEARCH_TYPE',
} ;


export const searchReducer = (state, action)=>{
    const {type, payload} = action;
    switch(type){
        case 'SET_SEARCH_FIELD':
            return {
                ...state,
                searchField: payload
            };
        default:
            throw new Error(`unhandled type ${type} in searchReducer`)
    }
}


const INITIAL_STATE = {
    searchField: {},
}



export const SearchContext = createContext({
    searchField: {},
    setSearchField:()=>{},
});




export const SearchProvider = ({children})=>{

    const [state, dispatch] = useReducer(searchReducer, INITIAL_STATE);

    const {searchField} = state;


    

    const setSearchField = (searchField)=>{
        dispatch({type:SEARCH_ACTION_TYPES.SET_SEARCH_FIELD, payload: searchField})
    };




    const value = {searchField, setSearchField};


    return(
        <SearchContext.Provider value = {value}>
            {children}
        </SearchContext.Provider>
    );
};