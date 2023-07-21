import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

import CheckoutItem from "../../components/checkout-item/checkout-itemComponenet";

import './checkoutStyle.scss'

const CheckOut = ()=>{
    const {cartItems, addItemToCart, removeItemFromCart} = useContext(CartContext);
    return(
        <div className="checkout-container">
            <h1>Check Out</h1>
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            
            {cartItems.map(cartItem =>{
                return(
                    <CheckoutItem key = {cartItem.id} cartItem={cartItem}/>
                )
            })}
            <span className="total"></span>
        </div>
    )
};


export default CheckOut;