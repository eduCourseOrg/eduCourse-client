/* eslint-disable react/prop-types */
import { useContext } from 'react';

import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import Button from '../../Components/Buttons/Button';
import FbButton from '../../Components/Buttons/FbButton';
import GoogleButton from '../../Components/Buttons/GoogleButton';
import { EduCourseContexts } from "../../Contexts/AuthProvider";
const SignUpForm = ({setIsLogin}) => {
    const {createAccount} = useContext(EduCourseContexts);
    const {
    register,
    handleSubmit,
    reset ,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data);
    createAccount(data.email,data.password)
        .then((res)=>{
          const user = res.user;
          console.log(user);
        })
        .catch((error) => {console.log(error);
    })
    reset();
  }
  //   const handleRegister = e =>{
  //       e.preventDefault();
  //       const form = e.target;
  //       const name = form.name.value;
  //       const email = form.email.value;
  //       const password = form.password.value;
  //       const number = form.number.value;
        
  //       // const role = 'student';
  //       const stdUser = {email, password, name,number};
  //       console.log(stdUser);
  //       createAccount(email,password)
  //       .then((res)=>{
  //         const user = res.user;
  //         console.log(user);
  //       })
  //       .catch((error) => {console.log(error);
  //   })
  // }
    return (
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="">

          <div className="mt-10">
            <div className="md:w-full flex gap-6 flex-col md:flex-row">
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
                  {...register("name", { required: true, maxLength: 20 })}
                />
                {errors.name && <span className="text-red-700">Name is required</span>}
              
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
                  {...register("number", { required: true, maxLength: 11 })} 
                />
                {errors.number && <span className="text-red-700">Please give your Phone number</span>}
              </div>
            </div>
            </div>

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
                  {...register("password", { required: true, minLength: 6,pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })}
                />
                {errors.password && <span className="text-red-700">Password should be 8 character long and should have at least one uppercase letter, one number and one special character</span>}
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