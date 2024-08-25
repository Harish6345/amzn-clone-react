import { Images } from '../../images/Images'
import './Loginpage.css'

import React from 'react'

const Loginpage = () => {
  return (
    <div className='container'>
      <div className="logo-container mx-auto">
     <img src={Images.logowt} className='mt-4 ' alt="" /></div>
       <div className="form-box mx-auto mt-5  border">
   <h2>Create Account</h2>
   <p className='mt-2'>your name</p>
   <input type="text" className='form-control' placeholder='First and Last Name'/>
   <p className='mt-2'>Mobile number or email</p>
   <input type="text" className='form-control' />
  <p className='mt-2'>Password</p>
  <input type="password" className='form-control' placeholder='At least 6 charecters' />
  <p className='mt-2'>Re Enter Password</p>
  <input type="text" className='form-control' />

 <button className='btn btn-warning w-100 mt-4 mb-2'>Continue</button>

<p>By creating an account, you agree to Amazon's <a href="/">Conditions of Use</a> and <a href="/">Privacy Notice</a>. 
</p>
<div className="underline mb-2"></div>

<p>
Already have an account? <a href="/">Sign in</a> </p>
       </div>




    </div>
  )
}

export default Loginpage