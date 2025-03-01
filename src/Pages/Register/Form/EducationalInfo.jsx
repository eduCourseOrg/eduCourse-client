/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { forwardRef, useImperativeHandle } from "react";
import { useForm } from "react-hook-form";

const EducationalInfo = forwardRef(
  ({ formData, setFormData, setCurrentStep }, ref) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      defaultValues: formData,
    });

    const handleForm = (data) => {
      
      setFormData((prevData) => ({ ...prevData, ...data }));
      console.log("Educational Info Submitted:", data);
      setCurrentStep(3);
    };

    useImperativeHandle(ref, () => ({
      submitForm: () => handleSubmit(handleForm)(),
    }));

    return (
      <div className="w-full">
        <form className="p-4 bg-white rounded-lg shadow-lg">
          <div className="flex flex-row justify-between gap-4 mt-5">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Education Qualification
              </label>
              <input
                type="text"
                placeholder="Education Qualification"
                {...register("education", {
                  required: "Education qualification is required",
                })}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.education && (
                <span className="text-red-500 text-sm">
                  {errors.education.message}
                </span>
              )}
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Resume
              </label>
              <input
                type="file"
                {...register("resume")}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="w-full mt-5">
            <label className="block text-sm font-medium text-gray-700">
              About yourself
            </label>
            <textarea
              placeholder="About yourself"
              {...register("yourself", {
                required: "About yourself is required",
              })}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            {errors.yourself && (
              <span className="text-red-500 text-sm">
                {errors.yourself.message}
              </span>
            )}
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
              <label className="block">Facebook</label>
              <input
                type="url"
                placeholder="Facebook url"
                {...register("facebook")}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
          <div className="flex flex-row justify-between gap-4  mt-5">
            <div className="w-1/2">
              <label className="block">Instagram</label>
              <input
                type="url"
                placeholder="Instagram url"
                {...register("instagram")}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="w-1/2">
              <label className="block">LinkedIn</label>
              <input
                type="url"
                placeholder="LinkedIn Url"
                {...register("linkedIn")}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
);

export default EducationalInfo;
