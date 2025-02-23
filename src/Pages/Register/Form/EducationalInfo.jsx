import { useForm } from "react-hook-form";

const EducationalInfo = () => {
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
            <label className="block">Education Qualification</label>
            <input
              type="text"
              placeholder="Education Qualification"
              {...register("Education", { required: true })}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.Education && (
              <span className="text-red-500 text-sm">
                Education qualification is required
              </span>
            )}
          </div>
          <div className="w-1/2">
            <label className="block">Resume</label>
            <input
              type="file"
              {...register("Resume")}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="w-full">
          <label className="block">About yourself</label>
          <textarea
            placeholder="About yourself"
            {...register("About yourself", { required: true })}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          {errors["About yourself"] && (
            <span className="text-red-500 text-sm">
              About yourself is required
            </span>
          )}
        </div>
      </form>
    </div>
  );
};

export default EducationalInfo;
