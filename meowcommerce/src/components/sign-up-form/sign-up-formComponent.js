import { useState} from "react";
import { createAuthUserWithEmailPassword, createUserDocumentFromAuth} from "../../utils/firebase/firebaseUtils.js";


import Forminput from "../form-input/form-inputComponenet.js";
import Button from "../button/buttonComponent.js";

import './sign-up-formStyle.scss'

const defaultFormFields = {
    displayName: '',
    email:'',
    password:'',
    confirmPassword:''
}


const SignUpForm = ()=>{

    const[formFields, setFormField] = useState(defaultFormFields);
    const{displayName, email, password, confirmPassword} = formFields;




    const handleSubmit = async (event)=>{
        event.preventDefault();

        if(password !== confirmPassword){
            alert('password must match!')
            return;
        }
        try{
            const response = await createAuthUserWithEmailPassword(email, password)
            const user = response.user
            await createUserDocumentFromAuth(user, {displayName})
            resetSearchField();
        }
        catch(err){
            if(err.code === 'auth/email-already-in-use'){
                console.log('email already in use!')
            }else{
                console.log('problem Signing up Please check credentials' + err)}
        };
        
    };
    
    const handleChange =(event)=>{
        const{name, value} = event.target;
        setFormField({...formFields,[name]:value});
    };

    const resetSearchField = ()=>{
        setFormField(defaultFormFields)
    }

    return(
        <div className="sign-up-container">
            <h2>Dont have an account ?</h2>
            <span>Sign up with email and password</span>
            <form onSubmit={handleSubmit}>
                <Forminput label = 'DisplayName' type= "text" required onChange={handleChange} name = 'displayName' value ={displayName}/>

                <Forminput label = 'Email' type= "email" required onChange={handleChange} name = 'email' value ={email}/>

                <Forminput label = 'Password' type= "password" required onChange={handleChange} name = 'password' value ={password}/>

                <Forminput label = 'Confirm password' type= "password" required onChange={handleChange} name = 'confirmPassword' value ={confirmPassword}/>

                <Button children={'Sign up!'} buttonType={'inverted'} type ='submit'/>
            </form>
        </div>
    );
};

export default SignUpForm;