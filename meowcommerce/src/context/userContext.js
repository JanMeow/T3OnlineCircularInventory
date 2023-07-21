import { createContext, useState, useEffect, useReducer} from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebaseUtils";

// The values you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: ()=> null,
})


export const USER_ACTION_TYPES = {
    'SET_CURRENT_USER' : 'SET_CURRENT_USER'
}


export const userReducer = (state, action) =>{
    const {type, payload} = action;


    switch(type){
        case'SET_CURRENT_USER':
            return{
                ...state,
                currentUser: payload
            }
        default:
            throw new Error(`unhandled type ${type} in userReducer`)
    }
}

const INITIAL_STATE = {
    currentUser:null
}


// THe componenets that are warapped by this UserProvider componenets have access to information store in UserContext
export const UserProvider = ({children}) =>{
    // Basically this UserProvider is going to let all its chilld access the values in its useState
    // much like in Class compoenent, the state attributes could be passed down as props to its childten 

    const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

    const {currentUser} = state;
    const setCurrentUser = (user) =>{
        dispatch({type:USER_ACTION_TYPES.SET_CURRENT_USER, payload: user})
    }

    const value = {currentUser, setCurrentUser};

    
    useEffect(()=>{
        const unsubscibe = onAuthStateChangedListener((user)=>{
            if(user){
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });
        return unsubscibe;
    }, []);

    return <UserContext.Provider value = {value}>{children}</UserContext.Provider>
};