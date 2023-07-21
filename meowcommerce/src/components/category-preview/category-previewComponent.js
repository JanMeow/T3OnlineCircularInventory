import './category-previewStyle.scss';
import MaterialCard from '../material-card/material-cardComponent';

import { SearchContext } from "../../context/searchContext";


const CategoryPreview = ({title, products}) =>{
    
    return(
        <div className='category-preview-container'>
            <h2>
                <span className = 'title'>{title.ToUpperCase()}</span>
            </h2>
            <div className='preview'>
                {
                    products
                    .filter((_,idx)=> idx<4)
                    .map((product) =>
                    <MaterialCard key = {product.id} product = {product}/>)
                }
            </div>
        </div>
    )
};

export default CategoryPreview;