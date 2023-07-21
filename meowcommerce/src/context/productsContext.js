import { createContext, useState, useEffect} from "react";
import MaterialData from "../material-data";

import {addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase/firebaseUtils";


// Product Context is like when put variables in this.state, we put materialInfo here because it is an attribute we will use,
// however since later we will useState to reinstantiate the value, so it doesnt really matter what we put here at first.
// therefore it is just an empty array from now
export const ProductsContext = createContext({
    materialInfo:[],
});



// Here we use useState to set a value to the materialInfo attribute that is stored in the parent componenet ProductContext
// such that is subsequent child can access it. Again even if you dont put anything in the ProductsContext, it will havea new attributre 
export const ProductsProvider = ({children})=>{
    const [materialInfo, setMaterialInfo] = useState({});

    useEffect(()=>{
        // addCollectionAndDocuments('categories', MaterialData)
        const getCategoriesMap = async()=>{
            const categoryMap = await getCategoriesAndDocuments();
            setMaterialInfo(categoryMap)
        }

        getCategoriesMap();

    }, [])

    const value = {materialInfo}
    return (
        <ProductsContext.Provider value ={value}>
            {children}
        </ProductsContext.Provider>)
};




// React Hook Revision
// useState is the version of setState for functional componenets
// it returns the attribute as an variable which equals to this.state[attribute] and also a function to set this particular state
// and it takes in an initial value for this particular state

// For example, in this case 
// const [materialInfo, setMaterialInfo ] = useState(MaterialData);
// to change the value of materialinfo which is equavilent to having this.setState( {this.state.materialinfo: newObj} )
// one can simply use setMaterialInfo(newObj) to do the equivalent thing.