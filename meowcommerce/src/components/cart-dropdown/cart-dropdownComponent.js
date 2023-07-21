import Button from '../button/buttonComponent';
import CartItem from '../cart-item/cart-itemComponenet';

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';


import './cart-dropdownStyle.scss';

const CartDropdown = () =>{
    const {cartItems, removeAllItem} = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () =>{
        navigate('/checkout')
    }

    return(
        <div className='cart-dropdown-container'>
            <h2 style = {{textDecoration: 'underline'}}>Your Selected Item</h2>
            <div className='cart-items'>
                {cartItems.map(item => <CartItem key = {item.id} cartItem={item}/>)}
                <Button onClick= {goToCheckoutHandler}>Go To Check Out </Button>
                <Button onClick = {removeAllItem}>Clear</Button>
            </div>
        </div>

    )
};

export default CartDropdown;