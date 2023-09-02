import React from "react";

import MaterialCard from "../home-card2/material-cardComponent";




const SearchTypeStream = ({items, searchField, title, maxIndex})=>{


    const Stream = (type, searchField, item)=>{
        switch(type){
            // Textural Data
            case 'name':
            case 'location':
            case 'colour':
                return(
                    item[type].toString().toLowerCase().includes(searchField)
                    )
            // Numeric Data
            case 'co2_saved':
                return(
                    item[type] >= Number(searchField)
                )
            case 'quantity/max':
            case 'price_euro/max':
            case 'dimension_length_cm/max':
            case 'dimension_width_cm/max':
            case 'dimension_height_cm/max':
                type = type.split('/')[0]
                if (item[type] === false){item[type] = 0} ;
                return(
                    item[type] <= Number(searchField)
                )
            case 'quantity/min':
            case 'price_euro/min':
            case 'dimension_length_cm/min':
            case 'dimension_width_cm/min':
            case 'dimension_height_cm/min':
                type = type.split('/')[0];

                if (item[type] === false){item[type] = 0} ;

                return(
                        item[type] >= Number(searchField)
                )
            default:
                throw new Error(`unhandled type ${type}`)
        }
    }

    // 1. Accept a type of array of SearvhType and SearchField eg [name, location,...], ['haha', 'zurich'] and list of items 

    const types = Object.keys(searchField)

    const Search = (types, searchField, items, maxIndex)=>{

        if(types.length >0){
            const currentSearchType = types.pop();
            const currentSearchField = searchField[currentSearchType];



            items = items.filter(item=> Stream(currentSearchType, currentSearchField, item));



            return Search(types,searchField, items, maxIndex)
        }

        return items.map((item,index) =>index<maxIndex && <MaterialCard key = {item.id} material ={item} title={title}/>)

       
    }
    
    return Search(types, searchField, items, maxIndex);
};


export default SearchTypeStream;