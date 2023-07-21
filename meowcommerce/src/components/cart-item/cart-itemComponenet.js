import './cart-itemStyle.scss';



const CartItem = ({cartItem})=>{
    const {name, imageUrl, quantity} = cartItem;
    
    return(
        <div className='cart-item-container'>
            <img src = {imageUrl} alt = {`${name}`}/>
            <div className='item-details'>
                <h2>{name}</h2>
                <span>Amount: {quantity}</span>
            </div>   
        </div>
    )
};

export default CartItem;