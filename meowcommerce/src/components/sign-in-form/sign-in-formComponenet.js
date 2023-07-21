import {signInWithGooglePopup,  signInAuthWithEmailAndPassword} from '../../utils/firebase/firebaseUtils.js';
import {useState} from 'react';

import Forminput from '../form-input/form-inputComponenet.js';
import Button from '../button/buttonComponent.js';

import './sign-in-formStyle.scss'
const defaultSignIn = {
    username:'',
    password:''
}


const SignIn =()=>{
    const[signInFormFields,setSignInFormField] = useState(defaultSignIn);
    const {username, password} = signInFormFields;



    const onInputChange = (event)=>{
        const{name, value} = event.target;
        setSignInFormField({...signInFormFields, [name]: value})
    }


    const logGoogleUser = async () =>{
        signInWithGooglePopup();
    }

    const logUser = async ()=>{
        try{
            await signInAuthWithEmailAndPassword(username,password);
            resetFormFields();}
        catch(err){
            switch (err.code){
                case 'auth/wrong-password': 
                    alert('incorrect password or email');
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
                default:
                    console.log(err);
            };
        };
        
    };

    const resetFormFields = () =>{
        setSignInFormField(defaultSignIn)
    }

    return(
        <div className ='sign-up-container'>
            <h1>Sign In Page</h1>
            <Forminput label = 'User Name/ User Email' type= "text" required  onChange = {onInputChange} name = 'username' value = {username} />
            <Forminput label = 'Password' type= "password" required onChange = {onInputChange} name = 'password' value = {password} />
            <div className='buttons-container'>
                <Button children={'Sign in'} buttonType={'inverted'} onClick={logUser} type ='submit'/>
                <Button children={'Sign in with google'} buttonType={'google'}  onClick ={logGoogleUser} type = 'button'/>
            </div>
        </div>
    )
};


export default SignIn;