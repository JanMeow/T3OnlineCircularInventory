import { Routes, Route} from 'react-router-dom';
import Home from './routes/home/homeComponent.js'
import Authentication from './routes/authentication/authenticationComponenet.js';
import Navigation from './routes/navigation/navigationComponenet.js';
import Shop from './routes/shop/shopComponent.js';
import CheckOut from './routes/checkout/checkoutComponenet.js';
import Segmentation from './components/segmentation-transformer/segmentationComponent.js';

import './components/home-card/background.css';



function App() {

  return (
    <Routes>
      <Route path ='/' element={<Navigation/>}>
        <Route index={true} element = {<Home/>}/>
        <Route path = 'auth'element = {<Authentication/>}/>
        <Route path = 'shop/*' element = {<Shop/>}/>
        <Route path = 'checkout' element = {<CheckOut/>}/>
        <Route path = 'segmentation' element = {<Segmentation/>}/>
      </Route>
    </Routes>
  );
};

export default App;