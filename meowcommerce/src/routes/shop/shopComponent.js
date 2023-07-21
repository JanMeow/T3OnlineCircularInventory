import { useContext} from "react";
import { Route, Routes } from "react-router-dom";

import { ProductsContext} from "../../context/productsContext";
import CategoriesPreview from "../categories-preview/categories-previewComponent";
import CategoryPreview from "../../components/category-preview/category-previewComponent";



import './shopStyle.scss'

const Shop = () =>{
    const {materialInfo} = useContext(ProductsContext);


    return(
        <Routes>
            <Route index element ={<CategoriesPreview/>}/>
            {/* <Route index element = {<CategoryPreview title ={materialInfo.title} products ={materialInfo}/>}/> */}
        </Routes>

    );
};

export default Shop;