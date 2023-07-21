import './homeCardStyle.css'
import { useState } from 'react';


const HomeCard = ({info}) =>{

    const {imageUrl, name, id} = info
    const [bgColour, setBgColour] = useState('rgb(255, 255, 255,0.9)')
    
    const bgColourHandler1 = ()=>{
        setBgColour('rgb(255, 255, 0,0.7)')
    }
    const bgColourHandler2 = ()=>{
        setBgColour('rgba(195, 195, 195, 0.5)')
    }

    return(
        <div className='card-container' onMouseEnter={bgColourHandler1} on onMouseLeave={bgColourHandler2}>
            <div className={'card'}>
                <div className="card_image" > 
                    <img src= {imageUrl} />
                </div>
                <div className="card_title title-white" style={{backgroundColor: bgColour, zIndex:1}}>
                    <p>{name}</p>
                    <div className='text'>
                        <p> Browse Material Information</p>
                    </div>
                </div>
                <p style={{backgroundColor: bgColour}}>Oh no </p>
            </div>
        </div>
    )
};

export default HomeCard;