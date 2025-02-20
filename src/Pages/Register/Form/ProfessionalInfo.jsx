import { useForm } from "react-hook-form";

const ProfessionalInfo = () => {
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
        <div className="flex flex-row justify-between gap-4 mt-5">
          <div className="w-1/2">
            <label
              htmlFor="expertise"
              className="block text-sm font-medium text-gray-700"
            >
              Expertise/Subject
            </label>
            <input
              id="expertise"
              type="text"
              placeholder="Expertise/Subject"
              {...register("Expertise", { required: true })}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.Expertise && (
              <span className="text-red-500 text-sm">
                Expertise is required
              </span>
            )}
          </div>

          <div className="w-1/2">
            <label className="block">Years of Experience</label>
            <input
              type="number"
              placeholder="Years of Experience"
              {...register("Experience", { required: true, min: 0 })}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.Experience && (
              <span className="text-red-500 text-sm">
                Experience is required
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-row justify-between gap-4  mt-5">
          <div className="w-1/2">
            <label className="block">Portfolio/Website</label>
            <input
              type="url"
              placeholder="Portfolio/Website"
              {...register("Portfolio")}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="w-1/2">
            <label className="block">Preferred Teaching Mode</label>
            <select
              {...register("Preferred Teaching Mode", { required: true })}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
              <option value="Both">Both</option>
            </select>
          </div>
        </div>
        <div className="flex flex-row justify-between gap-4  mt-5"></div>
        <div className="w-1/2">
          <label className="block">Availability:</label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                {...register("Availability.Morning")}
                className="mr-2"
              />{" "}
              Morning
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                {...register("Availability.Afternoon")}
                className="mr-2"
              />{" "}
              Afternoon
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                {...register("Availability.Evening")}
                className="mr-2"
              />{" "}
              Evening
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                {...register("Availability.Weekends")}
                className="mr-2"
              />{" "}
              Weekends
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfessionalInfo;
