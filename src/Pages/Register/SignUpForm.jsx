/* eslint-disable react/prop-types */
import { useContext } from 'react';

import { Link } from 'react-router-dom';
import Button from '../../Components/Buttons/Button';
import FbButton from '../../Components/Buttons/FbButton';
import GoogleButton from '../../Components/Buttons/GoogleButton';
import { EduCourseContexts } from "../../Contexts/AuthProvider";
const SignUpForm = ({setIsLogin}) => {
    const {createAccount} = useContext(EduCourseContexts);
    const handleRegister = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const number = form.number.value;
        
        // const role = 'student';
        const stdUser = {email, password, name,number};
        console.log(stdUser);
        createAccount(email,password)
        .then((res)=>{
          const user = res.user;
          console.log(user);
        })
        .catch((error) => {console.log(error);
    })
  }
    return (
        <div>
          <form onSubmit={handleRegister} className="">

          <div className="mt-10">
            <div className="md:w-full flex gap-3 flex-col md:flex-row">
            <div className="md:w-1/2 w-full">
              <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                Full name
              </label>
              <div className="mt-2">
                <input
                  
                  name="name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--color-primary)] sm:text-sm/6"
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                Phone number
              </label>
              <div className="mt-2">
                <input
                  
                  name="number"
                  type="number"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--color-primary)] sm:text-sm/6"
                />
              </div>
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
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--color-primary)] sm:text-sm/6"
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
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--color-primary)] sm:text-sm/6"
                />
              </div>
            </div>
      
          </div>
          <Button BtnText ="Sign Up" ></Button>
          <p className="my-6 flex justify-center items-center">Already have an account? <Link onClick={()=>setIsLogin(true)} className="text-teal-900 font-bold px-3 text-[18px]">Log In</Link></p>
          <div className="border-1 my-6 border-solid ..."></div>
          <div className="mt-6 text-center ">
          
          
          <GoogleButton BtnText="Continue with Google"></GoogleButton>
          <FbButton></FbButton>
          </div>
        
      </form> 
      
      
             
        </div>
    );
};

export default SignUpForm;