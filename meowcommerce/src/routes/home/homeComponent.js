import Directory from '../../components/directory/directory.js'
import categories from "../../components/category-item/categories.js"
import Introduction from '../../components/self-introduce/self-introduceComponenet.js'
import HomeCards from '../../components/home-card/homeCardsComponent.js'

import './homeComponentStyle.scss'


import segmentation1 from '../../assets/segmentation1.png' 
import segmentation2 from '../../assets/segmentation2.png'
import rhino1 from '../../assets/rhino1.gif'
import rhino2 from '../../assets/rhino2.gif'

const Home = () =>(
    <div>
        <div className='top-container'></div>
        <Introduction/>
        {/* <Directory categories= {categories}/>s */}
        <div className='content-wrapper'>
            <div className='home-card-introduction-container'>
                <div className='home-card-introduction-title'>
                    <h2>About the Thesis</h2>
                </div>

                <div className='home-card-introduction-text'>
                    <p> 
                        This thesis begins from web-scrapinbg information from the swiss government website of shortly demolished building 
                        and a list of Swiss second hand building material websites. 
                        These scrapped information are then parsed through an NLP model to extract information and features that 
                        are crucial to the designer with added features we find from surveys. 
                        A segmentation model targeting different building components will also be developed to turn 2D data into 3D 
                        along with text descrbiing the dimension.
                    </p>
                </div>
                <hr/>
                
            </div>
            <div>
                <HomeCards />
            </div>
            <div className='segmentaion-section-container'>
                <div className='segmentaion-section-left'>

                    <img src= {segmentation2}></img>
                    
                </div>
                <div className='segmentaion-section-right'>
                    <h1>Ai-aided 2D to 3D conversion</h1>
                    {/* <img src= {segmentation1}></img> */}
                    <p>
                        Simplify the integration of reusable materials into the design phase with use of Ai tools for 3D model generation
                        using text and images propmts , common data format from exisiting circular building materials selling website

                    </p>
                
                </div>
            </div>
            <div className='rhino-section-container'>
                <div className='rhino-section-left'>
                    <h1>Intuitive search engine and friendly computational method for 3D remap </h1>
                    <img src= {rhino2}></img>
                    <p>
                         A connection between 3D software and our cloud-based database. 
                         This link ensures Grasshopper accesses the most up-to-date list of available circular materials. 
                         Based on these different searching criteria, our system searches the database for the most fitting ciruclar matertials 
                         to replace existing components within the model. 

                    </p>
                </div>
                <div className='rhino-section-right'>
                    <img src= {rhino1}></img>


                </div>
            </div>
            <div className='logo-section-container'>
                <hr/>
                <div className='logo-introduction-title'>
                    <h2 >ETH Chairs Collaboration</h2>
                </div>
                <div className='logo-container'>
                    <img src='https://masterschool.climate-kic.org/wp-content/uploads/sites/8/2019/08/ETH-Zurich.jpg'
                    alt='ETH'></img>
                    <img src='https://media.licdn.com/dms/image/C560BAQEMsz8IKOuxCQ/company-logo_200_200/0/1607623018497?e=2147483647&v=beta&t=Y2jT0rLXT72m0Qjtkb-f5OmS0w28Xp2_R4kYDYta4W0'
                    alt='DBT'></img>
                    <img src='https://avatars.githubusercontent.com/u/32545728?s=280&v=4'
                    alt='GKR'></img>
                    <img src='https://images.squarespace-cdn.com/content/v1/636958d5f3f2ff2fd642811f/93dcfeeb-1fce-4805-b263-a9316c9c7ca1/logo_cea_square_transparant.png'
                    alt='CEA'></img>
                </div>
            </div>
        </div>
        <div className='bottom-container'></div>
    </div>
    )

export default Home