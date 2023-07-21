import './form-inputStyle.scss'

const Forminput = ({label, ...otherProps})=>{

    // `${otherProps.value.length?'shrink':''} form-input-label` meaning the if the user has input something in other props
    // such that otherprops.value.length !=0, hence = true, then it will have a shrink class
    return(
        <div className="group">
            <input className="form-input" {...otherProps}/>
            {label &&
            (<label className={`${otherProps.value.length?'shrink':''} form-input-label`}>
                {label}
            </label>)
            }
        </div>
    );
};

export default Forminput;