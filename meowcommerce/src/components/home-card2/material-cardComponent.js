import Button from "../button/buttonComponent";

import { useContext} from "react";
import { CartContext } from "../../context/cartContext";

import './material-cardStyle.scss';


const MaterialCard = ({material, title}) =>{
    const {name, quantity, image, id} = material;
    const {addItemToCart} = useContext(CartContext);


    const addProductToCart = ()=> addItemToCart(material);

    return(
        <div className="product-card-container">
            <a href={`/shop/${title}/${id}`}>
                <img src = {image} alt = {`${name}`}/>
            </a>
            <div className="footer">
                <span className= {name}>Name :{name}</span>
                <br></br>
                <span className= {quantity}>In stock: {quantity}</span>
            </div>
            <Button buttonType = 'inverted' onClick ={addProductToCart}> Add to cart</Button>
        </div>
    )
};

export default MaterialCard;