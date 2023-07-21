import './search-selection.scss'
import {useContext} from 'react';
import { SearchContext } from '../../context/searchContext';


const SearchSelection = () =>{
    const {searchType, setSearchType} = useContext(SearchContext);

    const searchTypeHandler = (event) =>{
        setSearchType(event.target.name)
    
    }

    return(
        <div className="search-selections-containers">
            <form className='search-selections'>
                <div>
                    <input type = 'checkbox' id ='searchByDimension' name = 'searchByDimension' value = 'Search by dimension'
                    onClick={searchTypeHandler}/>
                    <label htmlFor="searchByDimension" >Search by dimension</label>
                </div>
                <div>
                    <input type = 'checkbox' id = 'searchByPrice' name = 'searchByPrice' value = 'Search by Price'
                    onClick={searchTypeHandler}/>
                    <label htmlFor="searchByPrice">Search by Price</label>
                </div>
                <div>
                    <input type = 'checkbox' id = 'searchByQuantity' name = 'searchByQuantity' value = 'Search by Quantity'
                    onClick={searchTypeHandler}/>
                    <label htmlFor="searchByQuantity">Search by Quantity</label>
                </div>
                <div>
                    <input type = 'checkbox' id = 'searchByLocation' name = 'searchByLocation' value = 'Search by Location'
                    onClick={searchTypeHandler}/>
                    <label htmlFor="searchByLocation">Search by Location</label>
                </div>
                <div>
                    <input type = 'checkbox' id = 'searchByName' name = 'searchByName' value = 'Search by Name'
                    onClick={searchTypeHandler}/>
                    <label htmlFor="searchByName">Search by Name</label>
                </div>
                <div>
                    <input type = 'checkbox' id = 'searchByShape' name = 'searchByShape' value = 'Search by Shape'
                    onClick={searchTypeHandler}/>
                    <label htmlFor="searchByName">Search by Shape</label>
                </div>
            </form>
        </div>
    );
};

export default SearchSelection;