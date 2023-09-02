import { useState } from 'react';
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';


const HomeCard = ({info}) =>{

    const {imageUrl, name, id} = info
    const [bgColour, setBgColour] = useState('rgb(195, 195, 195, 0.5)')
    const [zIndex, setZIndex] = useState(0)
    
    const bgColourHandler1 = ()=>{
        setBgColour('rgb(236, 222, 23,0.5)')
        setZIndex(10)
    }
    const bgColourHandler2 = ()=>{
        setBgColour('rgba(195, 195, 195, 0.5)')
        setZIndex(0)
    }

    return(
        <div className='card-content-container'>
            <a href={`/shop/${name.toLowerCase()}`}>
                <div  key={name} onMouseEnter={bgColourHandler1}  onMouseLeave={bgColourHandler2} style={{zIndex:zIndex}}>
                    <div className='card'>
                        <div className="card-image" > 
                            <img src= {imageUrl} />
                        </div>
                        <div className="card-title" style={{backgroundColor: bgColour, zIndex:1}}>
                            <p>{name}</p>
                            <div className='text'>
                                <p> Browse Material Information</p>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
};

export default HomeCard;