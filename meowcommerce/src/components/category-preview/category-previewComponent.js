import './category-previewStyle.scss';
import MaterialCard from '../home-card2/material-cardComponent';
import SearchTypeStream from '../searchtype/search-type-Stream';
import {Fragment, useContext} from 'react';




const CategoryPreview = ({materialInfo, searchField, searchType}) =>{

    const match = document.URL

    return(
        <Fragment>
            {
                materialInfo.map(element=>
                    {
                        const{title, items} = element
                        return(

                            match.includes(title)&&
                            <Fragment key = {title}>
                                <h2 onClick = {()=>{console.log(match)}}>{title.toUpperCase()} </h2>
                                <div className="products-container">
                                    <SearchTypeStream items={items} searchField= {searchField} title = {title} maxIndex= {items.length}/>
                                </div>
                            </Fragment>
                        )
                })}   
        </Fragment>

    );
};

export default CategoryPreview;