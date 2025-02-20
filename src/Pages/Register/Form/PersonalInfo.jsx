import { useForm } from 'react-hook-form';
const PersonalInfo = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
      const onSubmit = data => console.log(data);
    return (
        <div className="w-full">
          <form onSubmit={handleSubmit(onSubmit)} className=" p-4  bg-white rounded-lg shadow-lg shadow-teal-800 ">
            <div className="flex flex-row justify-between gap-4 mt-5">
              <div className="w-1/2">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Full name</label>
                <input 
                    id="name"
                    type="text" 
                    placeholder="write your name" 
                    {...register("name", { required: true, maxLength: 80 })}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    {errors["name"] && <span className="text-red-500 text-sm">Your name is required</span>}
                 </div>

        

                <div className="w-1/2">
                 <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
          <select 
            id="gender"
            {...register("Gender", { required: true })}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.Gender && <span className="text-red-500 text-sm">Gender is required</span>}
                </div>
            </div>
        <div className="flex flex-row justify-between gap-4  mt-5">
          <div className="w-1/2">
          <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
          <input 
            id="dob"
            type="date" 
            {...register("Date of Birth", { required: true })}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors["Date of Birth"] && <span className="text-red-500 text-sm">Date of birth is required</span>}
            </div>

            <div className="w-1/2">
          <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile number</label>
          <input 
            id="mobile"
            type="tel" 
            placeholder="Mobile number" 
            {...register("Mobile number", { required: true, minLength: 11, maxLength: 12 })}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors["Mobile number"] && <span className="text-red-500 text-sm">Mobile number is required</span>}
          </div>    
        </div>   
          
            
        </form>  
        </div>
    );
};

export default PersonalInfo;