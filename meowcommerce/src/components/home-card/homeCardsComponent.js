import HomeCard from './homeCardComponent';
import SelfIntroduction from '../self-introduce/self-introduceComponenet';





const cardInfo = [
    {   
        id:1,
        imageUrl: "https://images.unsplash.com/photo-1527352774566-e4916e36c645?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2luZG93fGVufDB8fDB8fHww&w=1000&q=80",
        name: 'Window Frame'
    },
    {   
        id:2,
        imageUrl:"https://media.istockphoto.com/id/1029653638/photo/closed-white-door-on-concrete-wall.jpg?s=612x612&w=0&k=20&c=rdIvooPxqER80MuO3ClrDQfcswWINIgXR4NB9Qo4-c8=",
        name: 'Door'
    },
    {   
        id:3,
        imageUrl:"https://images.unsplash.com/photo-1621831337122-428c07cda1bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN0ZWVsJTIwc3RydWN0dXJlfGVufDB8fDB8fHww&w=1000&q=80",
        name: 'Steel'
    },
    {   
        id:4,
        imageUrl:"https://media.istockphoto.com/id/1195687584/photo/new-construction-home-residential-construction-home-framing-against-a-blue-sky.jpg?s=612x612&w=0&k=20&c=4UqAle6B8srcCjKFYtJg9c_1J7LbDmcUj5kzWK0HKp0=",
        name: 'Timber'
    },
    {   
        id:5,
        imageUrl:"https://images.pexels.com/photos/7931/pexels-photo-7931.jpg?cs=srgb&dl=pexels-pixabay-7931.jpg&fm=jpg",
        name: 'Concrete'
    },
    {   
        id:6,
        imageUrl:"https://images.adsttc.com/media/images/619d/3fd8/3143/4001/66f5/676d/large_jpg/re-emerge-emtech-x-hassell-c-naaro-01.jpg?1637695474",
        name: 'Design with Reclaimed Materials'
    },

]


const HomeCards = () =>{
    return(
        <div className='home-component-container'>
            <div class="cards-list">
                {cardInfo.map(element=>(
                    <HomeCard info ={element}/>
                ))}
                {/* <SelfIntroduction/>       */}
            </div>
        </div>

    );
};

export default HomeCards;