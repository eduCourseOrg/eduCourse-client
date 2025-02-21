import { useForm } from "react-hook-form";

const Confirmation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" p-4  bg-white rounded-lg shadow-lg shadow-teal-800 "
      >
        <div className="flex flex-row justify-between gap-4  mt-5">
          <div className="w-1/2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.Email && (
              <span className="text-red-500 text-sm">Invalid email</span>
            )}
          </div>

          <div className="w-1/2">
            <label className="block">Password</label>
            <input
              type="password"
              placeholder="Password"
              {...register("Password", { required: true, minLength: 6 })}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.Password && (
              <span className="text-red-500 text-sm">Password is required</span>
            )}
          </div>
        </div>
        <label className="flex items-center">
          <input
            type="checkbox"
            {...register("Terms", { required: true })}
            className="mr-2"
          />{" "}
          I agree to the terms and conditions
        </label>
      </form>
    </div>
  );
};

export default Confirmation;
