/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../Components/Buttons/Button';
import { EduCourseContexts } from "../../Contexts/AuthProvider";

const LoginForm = ({setIsLogin}) => {
  const navigate = useNavigate();
    const {logIn,googleLogin} = useContext(EduCourseContexts);
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
              toast.success('Log in Successfully');
              console.log(user);
            })
            .catch((error) => {
                toast.error('This is an error!',error.message);
                console.log(error);
        })
        reset();
      }
       const handleGoogle=()=>{
    googleLogin()
    .then((res)=>{
      const user = res.user;
      toast.success('Log in Successfully');
          console.log(user);
          navigate('/');
    })
    .catch((error) => {
      console.log(error);
      toast.error('This is an error!',error.message);
       })
  }
    return (
       <div>
          <form onSubmit={handleSubmit(onSubmit)} className="">

          <div className="">
          

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
          <p className="my-6 flex justify-center items-center">Do not have an account? <Link onClick={()=>setIsLogin(false)} className="text-teal-900 font-bold px-3 text-[18px]">Sign Up</Link></p>
          <div className="border-1 my-6 border-solid"></div>
          <div className="mt-6 text-center ">
          
          
         
          </div>
        
      </form> 
      
     <div>
 <button onClick={handleGoogle} className="m-auto w-2/3 flex justify-center items-center bg-white dark:bg-teal-900 border-2 border-teal-700 rounded-lg shadow-lg px-6 py-2 text-[15px] font-medium text-teal-800 dark:text-white hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200">
        <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="-0.5 0 48 48" version="1.1"> <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Color-" transform="translate(-401.000000, -860.000000)"> <g id="Google" transform="translate(401.000000, 860.000000)"> <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path> <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path> <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path> <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path> </g> </g> </g> </svg>
        <span>Continue with Google</span>
    </button>
      <button type="button" className="mt-3 m-auto w-2/3 py-2 px-4   flex justify-center items-center bg-white-600 border-2 border-teal-700  hover:shadow-lg focus:ring-white-500 focus:ring-offset-blue-200 text-teal-800  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
  <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
    <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
  </svg>
  Continue with Facebook
</button>
        <Toaster
  position="top-center"
  reverseOrder={false}
/>
     </div>
             
        </div>
    );
};

export default LoginForm;