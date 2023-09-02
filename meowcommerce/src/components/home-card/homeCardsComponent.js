import HomeCard from './homeCardComponent';
import {motion} from 'framer-motion';
import { useState } from 'react';
import './homeCardStyle.css'




const cardInfo = [
    {   
        id:'m1',
        imageUrl: "https://images.unsplash.com/photo-1527352774566-e4916e36c645?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2luZG93fGVufDB8fDB8fHww&w=1000&q=80",
        name: 'Window'
    },
    {   
        id:'m2',
        imageUrl:"https://media.istockphoto.com/id/1029653638/photo/closed-white-door-on-concrete-wall.jpg?s=612x612&w=0&k=20&c=rdIvooPxqER80MuO3ClrDQfcswWINIgXR4NB9Qo4-c8=",
        name: 'Door'
    },
    {   
        id:'m3',
        imageUrl:"https://thumbs.dreamstime.com/b/facade-office-building-windows-facade-old-red-brick-wall-windows-old-red-brick-wall-windows-windows-159777616.jpg",
        name: 'Brick'
    },
    {   
        id:'m4',
        imageUrl:"https://images.adsttc.com/media/images/624b/2e67/0174/da47/cb41/68d4/large_jpg/cs.jpg?1649094252",
        name: 'Facade_element'
    },
    {   
        id:'m5',
        imageUrl:"https://blog.architizer.com/wp-content/uploads/2017/11/1479137167255300dpi-doomo-004.jpg",
        name: 'Roof Tile'
    },
    {   
        id:'m6',
        imageUrl:"https://images.unsplash.com/photo-1621831337122-428c07cda1bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN0ZWVsJTIwc3RydWN0dXJlfGVufDB8fDB8fHww&w=1000&q=80",
        name: 'Steel'
    },
    {   
        id:'m7',
        imageUrl:"https://media.istockphoto.com/id/1195687584/photo/new-construction-home-residential-construction-home-framing-against-a-blue-sky.jpg?s=612x612&w=0&k=20&c=4UqAle6B8srcCjKFYtJg9c_1J7LbDmcUj5kzWK0HKp0=",
        name: 'Timber'
    },
    {   
        id:'m8',
        imageUrl:"https://images.pexels.com/photos/7931/pexels-photo-7931.jpg?cs=srgb&dl=pexels-pixabay-7931.jpg&fm=jpg",
        name: 'Concrete'
    },
    {   
        id:'m9',
        imageUrl:"https://materialdistrict.com/wp-content/uploads/2019/06/circular-pavilion-recycled-glass-materialdistrict-1.jpg",
        name: 'Projects using Circular Materials'
    },
    

]


const HomeCards = () =>{

    const [expandedIndex, setExpandedIndex] = useState({upperbound: 5, lowerbound:0});
    const [showArrow, setshowArrow] = useState({right: true, left:false});

    const defaultArrowBackground = {background:'black'}
    const changedArrowBackground = {background:'red', opacity: 0.5}

   const scrollHandler = (direction)=>{
    switch(direction){
        case 'Right':
            if(expandedIndex.upperbound< cardInfo.length){
                setExpandedIndex({...expandedIndex,upperbound: expandedIndex.upperbound +1, lowerbound: expandedIndex.lowerbound +1 } )
                setshowArrow({...showArrow,right: !showArrow.right})
            }
            break;
        case 'Left':
            if(expandedIndex.lowerbound> 0){
                setExpandedIndex({...expandedIndex,upperbound: expandedIndex.upperbound -1, lowerbound: expandedIndex.lowerbound -1} )
                setshowArrow({...showArrow,left: !showArrow.left})
            }
            break;
    }
   };



    return(
        <div className='home-component-container'>
            <div className='cards-title'>
                    <h2> Facade Materials </h2>
                    <p>Below are the list of material information scarpped from list of swiss websites and from the Swiss government official website
                        User can also imput images of the second hand products they want to sell and use the segmentation model in this website to turn 2D data
                        into 3D model which could automatically be used by Architects/ engineers in 3D software such as Rhino and Grasshopper
                    </p>
            </div>
            
            <div className='scroll-wrapper'>
                <div className='left-arrow-container' onClick={()=>scrollHandler('Left')} >&#60;</div> 
                <div className="cards-list">
                    {cardInfo.slice(expandedIndex.lowerbound,expandedIndex.upperbound).map((element)=>(
                        <HomeCard info ={element}/>
                    ))}
                </div>
                <div className='right-arrow-container' onClick={()=>scrollHandler('Right')}>&#62;</div>
            </div>
        </div>

    );
};

export default HomeCards;