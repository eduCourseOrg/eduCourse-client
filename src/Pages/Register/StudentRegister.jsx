import { useState } from 'react';

import LoginForm from './LoginForm';

import SignUpForm from './SignUpForm';
const StudentRegister = () => {
  const [isLogin,setIsLogin]= useState(true);
    
    return (
        <div className="h-screen flex justify-center items-center">
          
          <div className=" container my-16 lg:max-w-2/5 max-w-full  shadow-2xl rounded-2xl w-full p-12">
            <button className={isLogin? "btn  w-1/2 p-2 cursor-pointer rounded-t-lg font-bold text-[20px] text-[var(--color-secondary)] bg-[var(--color-primary)]":"btn  w-1/2 p-2 cursor-pointer rounded-t-lg  font-bold text-[20px] text-[var(--color-primary)] bg-[var(--color-secondary)]"} onClick={()=>setIsLogin(true)}>LogIn</button>
            <button className={!isLogin? "btn  w-1/2 p-2 cursor-pointer rounded-t-lg font-bold text-[20px] text-[var(--color-secondary)]  bg-[var(--color-primary)]":"btn  w-1/2 p-2 cursor-pointer rounded-t-lg font-bold text-[20px] text-[var(--color-primary)]  bg-[var(--color-secondary)]"} onClick={()=>setIsLogin(false)}>Sign Up</button>
            
            {
              isLogin?           
              <LoginForm setIsLogin={setIsLogin}></LoginForm>
              :
              <SignUpForm setIsLogin={setIsLogin}></SignUpForm>
            }
            
          </div>





          {/* <h1 className="text-5xl font-bold">Register now!</h1>
          <form onSubmit={handleRegister} className="card-body bg-">

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                Full name
              </label>
              <div className="mt-2">
                <input
                  
                  name="name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
              Password
              </label>
              <div className="mt-2">
                <input
                  name="password"
                  type="password" 
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
      
          </div>


       

       
        
          <button className="btn btn-primary border-4 mt-3 px-5
           bg-amber-800">Register</button>
        
        
      </form> */}

      
        </div>
    );
};

export default StudentRegister;