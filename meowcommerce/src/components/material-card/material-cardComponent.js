import Button from "../button/buttonComponent";

import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

import './material-cardStyle.scss';


const MaterialCard = ({material}) =>{
    const {name, Menge, imageUrl} = material;
    const {addItemToCart} = useContext(CartContext);


    const addProductToCart = ()=> addItemToCart(material);

    return(
    <div className="product-card-container">
        <img src = {imageUrl} alt = {`${name}`}/>
        <div className="footer">
            <span className= {name}>Name :{name}</span>
            <br></br>
            <span className= {Menge}>In stock: {Menge}</span>
        </div>
        <Button buttonType = 'inverted' onClick ={addProductToCart}> Add to cart</Button>
    </div>)
};

export default MaterialCard;