import './search-selection.scss'
import {useContext, useState} from 'react';
import { SearchContext } from '../../context/searchContext';
import {ProductsContext} from '../../context/productsContext'
import SearchButton2 from '../button2/Button2';


const MaterialTypeButton = ({materialInfo, onClick})=>{
    return(
        materialInfo.map(element =>{
            const {title} = element;
            return(
                <div className='material-type-buttons-container'>
                    <input type = 'checkbox' id ={title} name = {title} value = {title} onClick={onClick}/>
                    <label htmlFor={`${title}`} >{title}</label>
                </div>
            )
        })
    )
};


const MaterialFeatures = ({materialInfo, showMaterialFeatures, onChange})=>{

    const generalFeatures = ['name', 'location', 'url', 'model','quantity','material','condition','colour',
    'dimension_length_cm','dimension_width_cm','dimension_height_cm', 'co2_saved','price_euro','image','id'
    ,'price_compared_to_new']

    return(
        materialInfo.map(element =>{
            const {items, title} = element;
            const features = Object.keys(items[0]);

            console.log(features)
            if(showMaterialFeatures[title] === true){
                return(
                    features.filter(feature=> !generalFeatures.includes(feature)).map(feature=>{
                    return(
                        <div className='material-features-container'>
                            <div className='material-features-container-left'>
                                <input type = 'checkbox' id ={feature} name = {feature} />
                                <label htmlFor={`${feature}`} >{feature}</label>
                            </div>
                            <div className='search-features-container-right'>
                                {/* Material search type is not done yet this will be replacedd ith onChange */}
                                <input type='text' placeholder='search' onChange={()=>{}}></input>
                            </div> 
                        </div>
                    )
                }))

            }
        })
    )
};


const SearchButtonAndField = ({id, name, displayName, onChange, type, state, ...props}) =>{
    const value = state[name] || '';

    // For max and min search, their name includes '/'

    switch(name){

        case 'co2_saved':
            return (
                <div className='search-type-container'>
                    <div className='search-type-container-left'>
                        <input type = 'checkbox' id ={id} name = {name} value = {value} checked={value}/>
                        <label htmlFor={`${id}`} >{displayName}</label>
                    </div>
                    <div className='search-type-container-right'>
                        <input htmlFor ='Min' name = {name} type={type} value = {value} min="0" max="1000" id="LowerRange" onChange={onChange}/>
                            <label htmlFor="Min">Min: {value}</label>
                    </div> 
                </div>
            );
        case 'price_euro':
        case 'quantity':
        case 'dimension_length_cm':
        case 'dimension_width_cm':
        case 'dimension_height_cm':
            const value_max = state[name+ '/max'] || 0;
            const value_min = state[name+ '/min'] || 0;
            return(
                <div className='search-type-container'>
                    <div className='search-type-container-left'>
                        <input type = 'checkbox' id ={id} name = {name} value = {value} checked={value_max || value_min }/>
                        <label htmlFor={`${id}`} >{displayName}</label>
                    </div>
                    <div className='search-type-container-right'>
                        <input htmlFor ='Max' name = {name + '/max'} value = {value_max } type={type} min="0" max="1000"  id="UpperRange" onChange={onChange}/>
                            <label htmlFor="Max">Max: {value_max}</label>
                        <input htmlFor ='Min' name = {name + '/min'} value = {value_min} type={type} min="0" max="1000"  id="LowerRange" onChange={onChange}/>
                            <label htmlFor="Min">Min: {value_min}</label>
                    </div> 
                </div>
            )
        default:
            return(
                <div className='search-type-container'>
                    <div className='search-type-container-left'>
                        <input type = 'checkbox' id ={id} name = {name} value = {value} checked={value}/>
                        <label htmlFor={`${id}`} >{displayName}</label>
                    </div>
                    <div className='search-type-container-right'>
                        <input type={type} id = {id} name = {name} placeholder='search' onChange={onChange} value={value}></input>
                    </div> 
                </div>
            );
    };

};



const SearchButton = ({id, name, displayName, state, onChange}) =>{

    switch(name){
        case 'name':
        case 'location':
            return(
                <SearchButtonAndField id ={id} name={name} displayName={displayName} onChange={onChange}
                type ='text' state = {state}/>
            )
        case 'colour':
            return(
                <SearchButtonAndField id ={id} name={name} displayName={displayName} onChange={onChange}
                type ='color' state = {state}/>
            )
        // Numeric Data
        case 'co2_saved':
            return(
                <SearchButtonAndField id ={id} name={name} displayName={displayName} onChange={onChange}
                type ='range' state = {state}/>
            )
        case 'price_euro':
        case 'quantity':
            return(
                <SearchButtonAndField id ={id} name={name} displayName={displayName} onChange={onChange}
                type ='range' state = {state}/>
            )
        case 'dimension_length_cm':
        case 'dimension_width_cm':
        case 'dimension_height_cm':
            // Currently we still have false as null attribute
            return(
                <SearchButtonAndField id ={id} name={name} displayName={displayName} onChange={onChange}
                type ='range' state = {state}/>
            )
        default:
            <SearchButtonAndField id ={id} name={name} displayName={displayName} onChange={onChange}
                type ='text' state = {state}/>
    }
};


const ResetButton = ({id, onClick})=>(
    <div className='search-type-container'>
        <button type = 'button' id ={id} onClick={onClick}>Reset</button>
    </div>
)

const SearchSelection = ({searchTypesShow}) =>{
    const {searchField, setSearchField} = useContext(SearchContext);
    const {materialInfo} = useContext(ProductsContext);
    const [showMaterialFeatures, setShowMaterialFeatures] = useState({})


    const setSearchFieldChange = (event) =>{
        setSearchField({...searchField, [event.target.name]: event.target.value});
    };


    const showMaterialFeaturesHandler = (event)=>{
        setShowMaterialFeatures({...showMaterialFeatures, [event.target.name]: !showMaterialFeatures[event.target.name]})
    }

    const resetSearchFeaturesHandler = ()=>{
        setSearchField({})
    }

    return(
        <div className="search-selections-containers">            
            {searchTypesShow&&
            <div>
                <form className='search-selections' id='search-selections'>
                    <div className='search-selections-top'>
                        <MaterialTypeButton materialInfo={materialInfo} onClick={showMaterialFeaturesHandler}/>
                    </div>
                    <div className='search-selections-middle'>
                        <SearchButton id ='searchByDimension' name = 'dimension_length_cm' displayName = 'Search by Dimension (Length)' 
                         onChange={setSearchFieldChange} state ={searchField}/>
                         <SearchButton id ='searchByDimension' name = 'dimension_width_cm' displayName = 'Search by Dimension (Width)' 
                         onChange={setSearchFieldChange} state ={searchField}/>
                         <SearchButton id ='searchByDimension' name = 'dimension_height_cm' displayName = 'Search by Dimension (Height)' 
                         onChange={setSearchFieldChange} state ={searchField}/>
                        <SearchButton id = 'searchByPrice' name = 'price_euro' displayName = 'Search by Price' 
                        onChange={setSearchFieldChange} state ={searchField}/>
                        <SearchButton id = 'searchByQuantity' name = 'quantity' displayName = 'Search by Quantity' 
                        onChange={setSearchFieldChange} state ={searchField}/>
                        <SearchButton id = 'searchByLocation' name = 'location' displayName = 'Search by Location' 
                        onChange={setSearchFieldChange} state ={searchField}/>
                        <SearchButton id = 'searchByName' name = 'name' displayName = 'Search by Name' 
                        onChange={setSearchFieldChange} state ={searchField}/>
                        <SearchButton id = 'searchByColour' name = 'colour' displayName = 'Search by Colour' 
                        onChange={setSearchFieldChange} state ={searchField}/>
                        <SearchButton id ='searchByCO2saved' name = 'co2_saved' displayName = 'Search by CO2 saved' 
                        onChange={setSearchFieldChange} state ={searchField}/>
                        <ResetButton id ='reset' onClick={resetSearchFeaturesHandler} />
                    </div>
                    <div className='search-selections-bottom'>
                        <div className='search-selections-bottom-upper'>
                            <hr></hr>
                        </div>
                        <div className='search-selections-bottom-lower'>
                            <MaterialFeatures materialInfo ={materialInfo} showMaterialFeatures ={showMaterialFeatures}
                            onChange={setSearchFieldChange}/>

                        </div>
                    </div>   
                </form>
            </div>
            }
        </div>
    );
};

export default SearchSelection;