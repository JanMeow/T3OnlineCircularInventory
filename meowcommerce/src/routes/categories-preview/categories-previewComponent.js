import { useContext, Fragment } from "react";

import { ProductsContext} from "../../context/productsContext";
import MaterialCard from "../../components/material-card/material-cardComponent";
import { SearchContext } from "../../context/searchContext";

import './categories-previewStyle.scss'

const CategoriesPreview = () =>{
    const {materialInfo} = useContext(ProductsContext);
    const {searchField} = useContext(SearchContext);


    return(
        <Fragment>
            {
                Object.keys(materialInfo).map(title=>(
                    <Fragment key = {title}>
                        <h2>{title}</h2>
                        <div className="products-container">
                            {materialInfo[title].map((material)=>{
                                return material.name.toLowerCase().includes(searchField) &&
                                <MaterialCard key = {material.id} material ={material}/>
                            })}
                        </div>
                    </Fragment>
            ))}   
        </Fragment>

    );
};



export default CategoriesPreview;