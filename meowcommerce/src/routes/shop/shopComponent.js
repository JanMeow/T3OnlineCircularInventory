import { useContext} from "react";
import { Route, Routes } from "react-router-dom";

import { ProductsContext} from "../../context/productsContext";
import { SearchContext } from "../../context/searchContext";
import CategoriesPreview from "../categories-preview/categories-previewComponent";
import CategoryPreview from  '../../components/category-preview/category-previewComponent'
import MaterialDetail from "../../components/material-detail/material-detailComponent";
import './shopStyle.scss'



const Shop = () =>{
    const {materialInfo} = useContext(ProductsContext);
    const {searchField, searchType} = useContext(SearchContext);



    return(
        <Routes>
            <Route index element ={<CategoriesPreview materialInfo = {materialInfo} searchField = {searchField} searchType ={searchType}/>}/>
            {materialInfo.map(item=>( 
                <Route 
                key = {item.title}
                path ={item.title} 
                element = {<CategoryPreview materialInfo = {materialInfo} searchField = {searchField} searchType ={searchType}/>}/>
                ))}
            {materialInfo.map(element=>( 
                element.items.map(item=>
                    <Route 
                    key = {`${element.title}/${item.id}`} 
                    path ={`${element.title}/${item.id}`} 
                    element = {<MaterialDetail title ={element.title} item ={item}/>}/>
                )        
                ))}
        </Routes>
        

    );
};

export default Shop;