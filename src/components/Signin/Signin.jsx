import { Images } from '../../images/Images'
import './Signin.css'

import React from 'react'

const Signin = () => {
  return (
    <div className='sign-up mx-auto'>
     
     <div className="logo-containers mx-auto">
      <img className='w-100' src={Images.logowt} alt="" />
     </div>
      <div className="signup-form p-4 mt-4 border rounded">
      
      <h4>Sign in</h4>
      <p className='m-0 mt-4'>Email or Mobile Phone Number</p>
      <input type="text" className='form-control w-75 mb-2'/>
      <p className='m-0 w-75 mt-4'>Password  <span className='float-end'><a href="/">Forgot password?</a></span></p> 
      <input type="password" className='form-control w-75 mb-2' />
      <button className='w-75 mx-auto btn btn-warning mt-2'>Sign in</button>
      <p className='w-75 mt-4'>By continuing, you agree to Amazon's <a href="/">Conditions of Use</a> and <a href="/">Privacy Notice</a>.</p>
      <div className="check-box w-75 d-flex align-items-center">
      <input type="checkbox"  />
      <p className='m-0 ms-1 me-1'>Keep me Sign in. </p><a href="/">details.</a>
      </div>
      <div className="underline mt-4">

      </div>
      <button className='btn btn-transperent border w-75 mt-3'>Create Your Amazon Account</button>
      </div>
       
     


    </div>
  )
}

export default Signin