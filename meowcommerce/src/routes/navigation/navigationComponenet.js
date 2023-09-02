import { Fragment, useContext, useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import './navigationStyle.scss';
import logo from '../../assets/logo3.jpeg'
import CartIcon from "../../components/cart-icon/cart-iconComponenet";
import CartDropdown from "../../components/cart-dropdown/cart-dropdownComponent";
import SearchBar from "../../components/searchbar/searchbar";
import SearchSelection from "../../components/searchtype/search-selectionComponenet";
import SearchButton2 from "../../components/button2/Button2";

import { UserContext } from "../../context/userContext";
import { CartContext } from "../../context/cartContext";


import { signOutUser } from "../../utils/firebase/firebaseUtils";



const Navigation = ()=>{
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);

    const [searchTypesShow, setsearchTypesShow] = useState(false);


    const signOutHandler = async ()=>{
        await signOutUser();
    }

    const showSearchTypeHandler = () =>{
        setsearchTypesShow(!searchTypesShow)
    }

    return(
      <Fragment>
        <div className="header">
            <div className="front-line"></div>
            <h2 className="title"> T3 Online Circular Materials Inventory</h2>
            <div className="navigation">
                <div className="logo-container">
                    <Link to ='/'>
                        HOME
                    </Link>
                    <Link to = '/segmentation'>
                        Ai TOOL
                    </Link> 
                    <Link to ='/upload_material'>
                        Upload Material
                    </Link>
                </div>
                
                <div className="nav-links-container">
                    <div className="search-elements-container">
                        {/* <SearchBar/>   */}
                        <SearchButton2 onClick={showSearchTypeHandler} content = 'Open Search Manual'/>             
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
            <div className="bottom-search-type-container">
                <SearchSelection searchTypesShow={searchTypesShow}/>
            </div>
        </div>
        <Outlet/>
      </Fragment>
    );
  };


  export default Navigation