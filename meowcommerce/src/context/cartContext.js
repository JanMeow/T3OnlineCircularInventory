import { createContext, useState, useReducer} from "react";

const addCartItem = (cartItems, productToAdd) =>{

    // find if cartitems contain productToAdd
    const existingCartItem = cartItems.find((item)=> item.id === productToAdd.id);

    // if contains, quantity of that item +1
    if(existingCartItem){
        return cartItems.map((item) =>
        item.id === productToAdd.id
        ?{...item, quantity: item.quantity +1}
        : item
        );
    }
    

    return [...cartItems, {...productToAdd,quantity:1}];
};

const removeCartItem = (cartItems, productToRemove) =>{
    const existingCartItem = cartItems.find((item)=> item.id === productToRemove.id);


    if (existingCartItem.quantity ===1){
        return cartItems.filter(cartItem => cartItem.id != productToRemove.id);
    }

    return cartItems.map((item)=>{
        return(
            item.id === productToRemove.id && item.quantity !=1
            ?{...item, quantity: item.quantity-1}
            :item
        )}
    );
};

const clearCartItem = (cartItems, productToClear) =>{
    const existingCartItem = cartItems.find((item)=> item.id === productToClear.id);

    return cartItems.filter(item=>
        item.id != productToClear.id
    );
};


export const CartContext = createContext(
    {   isCartOpen: false,
        setIsCartOpen:() =>{},
        cartItems: [],
        addItemToCart: () =>{}
    }
);


export const CART_ACTION_TYPES = {
    'SET_IS_CART_OPEN':'SET_IS_CART_OPEN',
    'SET_CART_ITEMS': 'SET_CART_ITEMS'
} ;


export const cartReducer = (state, action)=>{
    const {type, payload} = action;
    switch(type){
        case 'SET_IS_CART_OPEN':
            return {
                ...state,
                isCartOpen: payload
            }
        case 'SET_CART_ITEMS':
            return{
                ...state,
                cartItems: payload
            }
        default:
            throw new Error(`unhandled type ${type} in cartReducer`)
    }
}


const INITIAL_STATE = {
    isCartOpen:false,
    cartItems: []
}

export const CartProvider = ({children}) =>{


    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const {isCartOpen, cartItems} = state;

    const setIsCartOpen = (bool)=>{
        dispatch({type:CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: bool})
    }

    const setCartItems = (product) =>{
        dispatch({type:CART_ACTION_TYPES.SET_CART_ITEMS, payload: product})
    }

    
    // const [isCartOpen, setIsCartOpen] = useState(false);
    // const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (product) =>{
        setCartItems(addCartItem(cartItems, product))
    };

    const removeItemFromCart = (product) =>{
        setCartItems(removeCartItem(cartItems, product))
    
    };

    const clearItemFromCart = (cartItemToClear) =>{
        setCartItems(removeCartItem(cartItems, cartItemToClear))
    };

    const removeAllItem = ()=>{
        setCartItems([]);
    };

    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        removeItemFromCart,
        clearItemFromCart,
        removeAllItem};

    return(
        <CartContext.Provider value = {value}>
            {children}
        </CartContext.Provider>
    );
};