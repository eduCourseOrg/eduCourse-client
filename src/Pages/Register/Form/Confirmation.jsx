/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { forwardRef, useContext, useImperativeHandle } from "react";
import { useForm } from "react-hook-form";
import { EduCourseContexts } from "../../../Contexts/AuthProvider";
const Confirmation = forwardRef(
  ({ formData, setFormData, handleFinalSubmit }, ref) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      defaultValues: formData,
    });
 const { createAccount, user } = useContext(EduCourseContexts);
    const handleForm = (data) => {
      const finalData = { ...formData, ...data };
      setFormData(finalData);

      console.log("Final Submitted Data:", finalData); // Debugging: View final submission

      handleFinalSubmit(finalData); // Call API or handle final submission
    };

    // Expose submitForm function to parent using ref
    useImperativeHandle(ref, () => ({
      submitForm: () => handleSubmit(handleForm)(),
    }));

    return (
      <div className="w-full">
        <form className="p-4 bg-white rounded-lg shadow-lg">
          <div className="flex flex-row justify-between gap-4 mt-5">
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
                placeholder={user ? user.email : "email"}
                value={user ? user.email : ""}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email format",
                  },
                })}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="w-1/2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.password && (
                <span className="text-red-500 text-sm">
                  {errors.password.message}
                </span>
              )}
            </div>
          </div>

          <label className="flex items-center mt-5">
            <input
              type="checkbox"
              {...register("terms", {
                required: "You must agree to the terms",
              })}
              className="mr-2"
            />
            I agree to the terms and conditions
          </label>
          {errors.terms && (
            <span className="text-red-500 text-sm block">
              {errors.terms.message}
            </span>
          )}
        </form>
      </div>
    );
  }
);

export default Confirmation;
