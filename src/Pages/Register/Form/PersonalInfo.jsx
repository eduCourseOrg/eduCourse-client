import { useForm } from 'react-hook-form';
const PersonalInfo = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
      const onSubmit = data => console.log(data);
    return (
        <div className="w-full">
          <form onSubmit={handleSubmit(onSubmit)} className=" p-4  bg-white rounded-lg shadow-lg shadow-teal-800 ">
            <div className="flex flex-row justify-between gap-4">
              <div className="w-1/2">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First name</label>
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
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input 
                    id="email"
                    type="email" 
                    placeholder="Email" 
                    {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {errors.Email && <span className="text-red-500 text-sm">Invalid email</span>}
                </div>
            </div>
        <div>
          <div>
          <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
          <input 
            id="dob"
            type="date" 
            {...register("Date of Birth", { required: true })}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors["Date of Birth"] && <span className="text-red-500 text-sm">Date of birth is required</span>}
        </div>

        <div>
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