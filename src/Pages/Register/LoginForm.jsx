/* eslint-disable react/prop-types */
import { useContext } from 'react';

import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import Button from '../../Components/Buttons/Button';
import FbButton from '../../Components/Buttons/FbButton';
import GoogleButton from '../../Components/Buttons/GoogleButton';
import { EduCourseContexts } from "../../Contexts/AuthProvider";

const LoginForm = ({setIsLogin}) => {
    const {logIn} = useContext(EduCourseContexts);
        const {
        register,
        handleSubmit,
        reset ,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => {
        console.log(data);
        logIn(data.email,data.password)
            .then((res)=>{
              const user = res.user;
              console.log(user);
            })
            .catch((error) => {console.log(error);
        })
        reset();
      }
    return (
       <div>
          <form onSubmit={handleSubmit(onSubmit)} className="">

          <div className="mt-10">
          

            <div className="sm:col-span-4 my-2 ">
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--color-primary)] sm:text-sm/6"
                  {...register("email", { required: true })}
                />
                {errors.email && <span className="text-red-700">Please write your email address here</span>}
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
                  {...register("password", { required: true})}
                />
                
              </div>
            </div>
      
          </div>
          <Button BtnText ="Login" ></Button>
          <p className="my-6 flex justify-center items-center">Do not have an account? <Link onClick={()=>setIsLogin(true)} className="text-teal-900 font-bold px-3 text-[18px]">Sign Up</Link></p>
          <div className="border-1 my-6 border-solid ..."></div>
          <div className="mt-6 text-center ">
          
          
          <GoogleButton BtnText="Continue with Google"></GoogleButton>
          <FbButton></FbButton>
          </div>
        
      </form> 
      
      
             
        </div>
    );
};

export default LoginForm;