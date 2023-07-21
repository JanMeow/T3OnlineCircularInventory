import './searchbar.scss';
import {useContext, useState} from 'react';
import { SearchContext } from '../../context/searchContext';



const SearchBar = () =>{
    const {searchField, setSearchField, searchType, setSearchType} = useContext(SearchContext);

    
    const setSearchFieldChange = (event) =>{
        setSearchField(event.target.value);
    };

    const onFieldSubmit = (event) =>{
        // console.log(event)
        // setSearchType()
    };

    return(
        <div className="container">
            <form action="" className="search">
                <input className="search__input" type="search" placeholder="Search" id="searchInput" onChange={setSearchFieldChange}/>
                <div className="search__icon-container">
                <label htmlFor="searchInput" className="search__label" aria-label="Search">
                    <svg viewBox="0 0 2200 2200" title="Search">
                    <path fill="currentColor" d="M408 745a337 337 0 1 0 0-674 337 337 0 0 0 0 674zm239-19a396 396 0 0 1-239 80 398 398 0 1 1 319-159l247 248a56 56 0 0 1 0 79 56 56 0 0 1-79 0L647 726z" />
                    </svg>
                </label>

                <button className="search__submit" aria-label="Search" onSubmit={onFieldSubmit}>
                    <svg viewBox="0 0 2200 2200" title="Search">
                    <path fill="currentColor" d="M408 745a337 337 0 1 0 0-674 337 337 0 0 0 0 674zm239-19a396 396 0 0 1-239 80 398 398 0 1 1 319-159l247 248a56 56 0 0 1 0 79 56 56 0 0 1-79 0L647 726z" />
                    </svg>
                </button>
                </div>
            </form>
        </div>
    )
};

export default SearchBar