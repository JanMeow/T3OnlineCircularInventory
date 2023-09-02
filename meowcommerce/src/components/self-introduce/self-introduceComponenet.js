import './self-introductionStyle.scss';
import Button from '../button/buttonComponent';

const Introduction = () =>{
    return(
    <div className="self-introduction-container">
        <div className='introduction-container'>
            <h2>
                #ETH Master Thesis for Online Circular Material Library
            </h2>
            <br/>
            <p>Master thesis by Kevin and Jan</p>
            <Button className ='button'>Find out More</Button>

        </div>

    </div>
    )
};



export default Introduction;