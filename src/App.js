import React from 'react'
import './Index.css'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Homepage from './components/Homepage/Homepage';
import Loginpage from './components/Loginpage/Loginpage';
import Signin from './components/Signin/Signin';
import Product from './components/Product/Product';
import Youraccount from './components/youraccount/Youraccount';
import Productlist from './components/productlist/Productlist';








const App = () => {

  
  return (
    <div>
<Router>
<Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/login" element={<Loginpage />} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/product' element={<Product/>} />
        <Route path ='/youraccount' element={<Youraccount/>} />
        <Route path='/productlist' element={<Productlist/>} />

      </Routes>
  </Router>
    </div>
  )
}

export default App