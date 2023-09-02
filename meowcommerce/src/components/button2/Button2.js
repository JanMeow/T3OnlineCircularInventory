import React from "react";
import './button2Style.scss'


const SearchButton2 = ({onClick, content}) =>{
    return(
        <button type="button" className='custom-btn btn-5'
            onClick = {onClick}>
                {content}
        </button>
    );
};

export default SearchButton2;