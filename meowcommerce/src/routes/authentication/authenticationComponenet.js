import SignUpForm from '../../components/sign-up-form/sign-up-formComponent.js';
import SignInForm from '../../components/sign-in-form/sign-in-formComponenet.js'

import './authenticationStyle.scss';

const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;