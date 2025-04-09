/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { forwardRef, useImperativeHandle } from "react";
import { useForm } from "react-hook-form";

const PersonalInfo = forwardRef(
  ({ formData, setFormData, setCurrentStep }, ref) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      defaultValues: formData,
    });

    const handleForm = (data) => {
      const formDataObject = new FormData();

      // Append text fields
      Object.keys(data).forEach((key) => {
        if (key !== "profile") {
          formDataObject.append(key, data[key]);
        }
      });

      // Append file (profile picture)
      if (data.profile && data.profile[0]) {
        formDataObject.append("profile", data.profile[0]); // `data.profile` is an array, so take the first file
      }

      setFormData((prevData) => ({ ...prevData, ...data }));
      console.log("Personal Info Submitted:", data);

      setCurrentStep(2);
    };

    // Expose submitForm function to parent using ref
    useImperativeHandle(ref, () => ({
      submitForm: () => handleSubmit(handleForm)(),
    }));

    return (
      <div className="w-full">
        <form
          className="p-4 bg-white rounded-lg shadow-lg"
          encType="multipart/form-data"
        >
          <div className="flex flex-row justify-between gap-4 mt-5">
            <div className="w-1/2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Write your name"
                {...register("name", { required: "Your name is required" })}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>

            <div className="w-1/2">
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-gray-700"
              >
                Gender
              </label>
              <select
                id="gender"
                {...register("gender", { required: "Gender is required" })}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.gender && (
                <span className="text-red-500 text-sm">
                  {errors.gender.message}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-row justify-between gap-4 mt-5">
            <div className="w-1/2">
              <label
                htmlFor="dob"
                className="block text-sm font-medium text-gray-700"
              >
                Date of Birth
              </label>
              <input
                id="dob"
                type="date"
                {...register("dob", { required: "Date of birth is required" })}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.dob && (
                <span className="text-red-500 text-sm">
                  {errors.dob.message}
                </span>
              )}
            </div>

            <div className="w-1/2">
              <label
                htmlFor="profile"
                className="block text-sm font-medium text-gray-700"
              >
                Profile Picture
              </label>
              <input
                id="profile"
                type="file"
                accept="image/*"
                {...register("profile", {
                  required: "Profile picture is required",
                })}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.profile && (
                <span className="text-red-500 text-sm">
                  {errors.profile.message}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-row justify-between gap-4 mt-5">
            <div className="w-1/2">
              <label
                htmlFor="mobile"
                className="block text-sm font-medium text-gray-700"
              >
                Mobile Number
              </label>
              <input
                id="mobile"
                type="tel"
                placeholder="Mobile number"
                {...register("mobile", {
                  required: "Mobile number is required",
                  minLength: {
                    value: 11,
                    message: "Mobile number must be at least 11 digits",
                  },
                  maxLength: {
                    value: 12,
                    message: "Mobile number cannot exceed 12 digits",
                  },
                })}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.mobile && (
                <span className="text-red-500 text-sm">
                  {errors.mobile.message}
                </span>
              )}
            </div>

            <div className="w-1/2">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <input
                id="address"
                type="text"
                placeholder="Write your address"
                {...register("address", { required: "Address is required" })}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.address && (
                <span className="text-red-500 text-sm">
                  {errors.address.message}
                </span>
              )}
            </div>
          </div>
        </form>
      </div>
    );
  }
);

export default PersonalInfo;
