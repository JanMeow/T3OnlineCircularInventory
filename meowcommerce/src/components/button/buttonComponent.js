import './buttonStyle.scss'


// There are 3-4 types of button

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
}



const Button = ({children, buttonType, ...otherProps})=>{
    return(
        <button className= {`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>
            {children}
        </button>
    );
};

export default Button;