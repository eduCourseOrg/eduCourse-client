import { useContext } from 'react';
import { EduCourseContexts } from "../../Contexts/AuthProvider";


const StudentRegister = () => {
    const {createAccount} = useContext(EduCourseContexts);
    const handleRegister = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
  
        // const photoURL = form.photoURL.value;
        // const role = 'student';
        const stdUser = {email, password, name};
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
          <h1 className="text-5xl font-bold">Register now!</h1>
          <form onSubmit={handleRegister} className="card-body">

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
        
        
      </form>

      
        </div>
    );
};

export default StudentRegister;