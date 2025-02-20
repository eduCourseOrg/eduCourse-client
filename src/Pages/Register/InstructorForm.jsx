// import React from 'react';
import { useForm } from 'react-hook-form';
import SubmitButton from '../../Components/Buttons/SubmitButton';
import FormTeest from './FormTeest';

const InstructorForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div>
       <div className="bg-gray-900 flex flex-col gap-10 h-screen items-center justify-center">
      <FormTeest></FormTeest>
    </div>
      {/* <PhnFirebaseUi></PhnFirebaseUi> */}
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-3xl mx-auto p-4 space-y-4 bg-white rounded-lg shadow-lg shadow-teal-800 ">
        
        {/* <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First name</label>
          <input 
            id="firstName"
            type="text" 
            placeholder="First name" 
            {...register("First name", { required: true, maxLength: 80 })}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors["First name"] && <span className="text-red-500 text-sm">First name is required</span>}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last name</label>
          <input 
            id="lastName"
            type="text" 
            placeholder="Last name" 
            {...register("Last name", { required: true, maxLength: 100 })}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors["Last name"] && <span className="text-red-500 text-sm">Last name is required</span>}
        </div>

        <div>
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

        <div>
          <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile number</label>
          <input 
            id="mobile"
            type="tel" 
            placeholder="Mobile number" 
            {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors["Mobile number"] && <span className="text-red-500 text-sm">Mobile number is required</span>}
        </div> */}

        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <select 
            id="title"
            {...register("Title", { required: true })}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
            <option value="Dr">Dr</option>
          </select>
          {errors.Title && <span className="text-red-500 text-sm">Title is required</span>}
        </div>

        <div className="flex space-x-4">
          <label className="flex items-center">
            <input 
              {...register("Developer", { required: true })} 
              type="radio" 
              value="Yes" 
              className="mr-2" 
            /> Yes
          </label>
          <label className="flex items-center">
            <input 
              {...register("Developer", { required: true })} 
              type="radio" 
              value="No" 
              className="mr-2" 
            /> No
          </label>
          {errors.Developer && <span className="text-red-500 text-sm">Developer selection is required</span>}
        </div>

        {/* <div>
          <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
          <input 
            id="dob"
            type="date" 
            {...register("Date of Birth", { required: true })}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors["Date of Birth"] && <span className="text-red-500 text-sm">Date of birth is required</span>}
        </div> */}

        {/* <div>
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
        </div> */}

        {/* <div>
          <label htmlFor="expertise" className="block text-sm font-medium text-gray-700">Expertise/Subject</label>
          <input 
            id="expertise"
            type="text" 
            placeholder="Expertise/Subject" 
            {...register("Expertise", { required: true })}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.Expertise && <span className="text-red-500 text-sm">Expertise is required</span>}
        </div> */}

        {/* Other form fields... */}
<div>
  {/* <label className="block">Years of Experience</label>
  <input 
    type="number" 
    placeholder="Years of Experience" 
    {...register("Experience", { required: true, min: 0 })}
    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
  />
  {errors.Experience && <span className="text-red-500 text-sm">Experience is required</span>} */}
</div>

<div>
  {/* <label className="block">Education Qualification</label>
  <input 
    type="text" 
    placeholder="Education Qualification" 
    {...register("Education", { required: true })}
    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
  />
  {errors.Education && <span className="text-red-500 text-sm">Education qualification is required</span>} */}
</div>

<div>
  <label className="block">Certifications</label>
  <input 
    type="file" 
    {...register("Certifications")}
    className="w-full p-2 border border-gray-300 rounded-md"
  />
</div>

<div>
  <label className="block">LinkedIn Profile</label>
  <input 
    type="url" 
    placeholder="LinkedIn Profile" 
    {...register("LinkedIn")}
    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
  />
</div>

<div>
  <label className="block">Portfolio/Website</label>
  <input 
    type="url" 
    placeholder="Portfolio/Website" 
    {...register("Portfolio")}
    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
  />
</div>

<div>
  {/* <label className="block">Preferred Teaching Mode</label>
  <select 
    {...register("Preferred Teaching Mode", { required: true })}
    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
  >
    <option value="Online">Online</option>
    <option value="Offline">Offline</option>
    <option value="Both">Both</option>
  </select> */}
</div>

{/* <div className="space-y-2">
  <label className="block">Availability:</label>
  <div className="flex space-x-4">
    <label className="flex items-center">
      <input 
        type="checkbox" 
        {...register("Availability.Morning")} 
        className="mr-2" 
      /> Morning
    </label>
    <label className="flex items-center">
      <input 
        type="checkbox" 
        {...register("Availability.Afternoon")} 
        className="mr-2" 
      /> Afternoon
    </label>
    <label className="flex items-center">
      <input 
        type="checkbox" 
        {...register("Availability.Evening")} 
        className="mr-2" 
      /> Evening
    </label>
    <label className="flex items-center">
      <input 
        type="checkbox" 
        {...register("Availability.Weekends")} 
        className="mr-2" 
      /> Weekends
    </label>
  </div>
</div> */}

<div>
  {/* <label className="block">About yourself</label>
  <textarea 
    placeholder="About yourself" 
    {...register("About yourself", { required: true })}
    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
  ></textarea>
  {errors["About yourself"] && <span className="text-red-500 text-sm">About yourself is required</span>} */}
</div>

<div>
  {/* <label className="block">Resume</label>
  <input 
    type="file" 
    {...register("Resume")}
    className="w-full p-2 border border-gray-300 rounded-md"
  /> */}
</div>

<div>
  {/* <label className="block">Password</label>
  <input 
    type="password" 
    placeholder="Password" 
    {...register("Password", { required: true, minLength: 6 })}
    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
  />
  {errors.Password && <span className="text-red-500 text-sm">Password is required</span>} */}
</div>

<div>
  <label className="block">Confirm Password</label>
  <input 
    type="password" 
    placeholder="Confirm Password" 
    {...register("Confirm Password", { required: true, minLength: 6 })}
    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
  />
  {errors["Confirm Password"] && <span className="text-red-500 text-sm">Confirmation password is required</span>}
</div>

<div>
  <label className="flex items-center">
    <input 
      type="checkbox" 
      {...register("Terms", { required: true })}
      className="mr-2" 
    /> I agree to the terms and conditions
  </label>
</div>

<div>
  <input 
    type="submit" 
    value="Submit" 
    className="w-full p-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600"
  />
  <SubmitButton btnText={'submit'}></SubmitButton>
  <button className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-gray-800 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-teal-800 before:duration-500 before:ease-out hover:shadow-teal-800 hover:before:h-56 hover:before:w-56">
      <span className="relative z-10">Subbbmit</span>
    </button>
   <button className="relative h-[50px] w-40 overflow-hidden border border-green-900 bg-white text-green-900 shadow-2xl transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-green-900 before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-green-900 after:duration-500 hover:text-white hover:shadow-green-900 hover:before:h-2/4 hover:after:h-2/4"><span className="relative z-10">Smoosh</span></button>
   <button className="before:ease relative h-12 w-40 overflow-hidden border border-black shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-700 hover:text-white hover:shadow-black hover:before:-rotate-180">
      <span className="relative z-10">Slide hover</span>
    </button>
	
<div className="flex my-8 m-auto w-2/3 rounded-lg text-teal-800 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-700 p-0.5 shadow-lg">
  <button className="relative flex-1 font-bold text-[16px] bg-white px-1 py-1 rounded-lg cursor-pointer overflow-hidden border-2 border-transparent hover:border-transparent group">
    <span className="absolute inset-0 w-full h-full rounded-md bg-gradient-to-r from-teal-700 via-green-500 to-teal-300 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
    <span className="relative z-10">GOOOO</span>
  </button>
</div>

</div>

      
      </form>
    </div>
  );
};

export default InstructorForm;
