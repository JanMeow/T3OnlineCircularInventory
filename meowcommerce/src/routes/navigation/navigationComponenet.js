import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import './navigationStyle.scss';
import logo from '../../assets/logo3.jpeg'
import CartIcon from "../../components/cart-icon/cart-iconComponenet";
import CartDropdown from "../../components/cart-dropdown/cart-dropdownComponent";
import SearchBar from "../../components/searchbar/searchbar";
import SearchSelection from "../../components/searchtype/search-selectionComponenet";

import { UserContext } from "../../context/userContext";
import { CartContext } from "../../context/cartContext";


import { signOutUser } from "../../utils/firebase/firebaseUtils";



const Navigation = ()=>{
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);

    const signOutHandler = async ()=>{
        await signOutUser();
    }

    return(
      <Fragment>
        <h1 className="title"> T3 Online Circular Materials Inventory</h1>
        <div className="navigation">
            <div className="logo-container">
                <Link to ='/'>
                    HOME
                </Link>
                <Link to = '/segmentation'>
                    Ai TOOL
                </Link> 
            </div>
            
            <div className="nav-links-container">
                <div className="search-elements-container">
                    <SearchBar/>       
                    <SearchSelection/>             
                </div>
                <Link className="nav-link" to='/shop'>
                    Browse Materials
                </Link>
                {currentUser?(<span className="nav-link" onClick={signOutHandler}> SIGN OUT</span>)
                :(
                <Link className="nav-link" to='/auth'>
                SIGNIN
                </Link>)
                }
                <CartIcon/>
            </div>
            {isCartOpen &&<CartDropdown/>}
        </div>
        <Outlet/>
      </Fragment>
    );
  };


  export default Navigation