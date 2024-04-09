import React from 'react'
import Navbar from './Navbar'
import { banner, loginpage } from '../assets'
import { layout } from '../style'
// import useNavigate from 'react-router-dom'
import { Link, redirect } from "react-router-dom";
import Footer from './Footer';
const Login = () => {
  // const navigate=useNavigate();
  const handlechange=()=>{
  redirect("/dashboard")
  alert("bikash")
  }
  return (
    <div>
      <div className='px-10'>
      <Navbar/>
      </div>
    
   <div className='md:flex  md:justify-center items-center md:flex-row flex-col p-28 w-[100%] ' id='main'>
    
    <div className={`${layout.section} md:bg-gray-300 rounded-2xl `}>
      
    
    <div className={`${layout.sectionImg} `} style={{height:240}}>
    
      <img src={loginpage} alt="billing" className="w-[150px] h-[100%] rounded-2xl" />
      
    </div>
    
    <div className='w-[500px] rounded-2xl m-4 py-5 -ml-[135px] md:ml-[100px]' id='loginform'>
    <form>
    <div class=" px-8 mt-3">
                <label for="email" class="block text-white text-sm font-bold mb-2">Email Address</label>
                <input type="email" id="email" name="email" class="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500" placeholder="Enter your email"/>
            </div>
            <div class="px-8 mb-3">
                <label for="password" class="block text-white text-sm font-bold mb-2">Password</label>
                <input type="password" id="password" name="password" class="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500" placeholder="Enter your password"/>
            </div>
            <div className='mt-0 flex justify-start mx-4'>
           <Link to={'/dashboard'} id='btn-grad'>Login</Link>
            </div>
    </form>
    </div>
    
    </div>
    
   </div>
   <Footer/>
   </div>
  )
}

export default Login 