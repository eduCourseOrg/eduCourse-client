/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { forwardRef, useImperativeHandle } from "react";
import { useForm } from "react-hook-form";
import DropDownWq from "../DropDownWq";


const Skills = forwardRef(({ formData, setFormData, setCurrentStep }, ref) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
  });
  // Watch the selected skills
  const selectedSkills = watch("skills", []);
  const handleForm = (data) => {
    // const updatedData = { ...formData, ...data };
    const { availability, ...otherData } = data;
    const available = [];

    for (const avail in availability) {
      if (availability[avail]) {
        available.push(avail);
      }
    }
    console.log("new available", availability, otherData, available);
    setFormData((prevData) => ({
      ...prevData,
      ...otherData,
      availability: available,
    }));
    console.log("Skills Info Submitted:", data);
    setCurrentStep(4);
  };

  // Expose submitForm function to parent using ref
  useImperativeHandle(ref, () => ({
    submitForm: () => handleSubmit(handleForm)(),
  }));

  return (
    <div className="w-full">
      <form className="p-4 bg-white rounded-lg shadow-lg">
        <div className="w-full mt-5">
          <label
            htmlFor="skills"
            className="block text-sm font-medium text-gray-700"
          >
            Expertise/skills
          </label>
          {/* Replace input with CustomDropdown */}
          <DropDownWq
            className="w-full border border-gray-300 rounded-md p-2"
            selected={selectedSkills}
            setSelected={(values) => setValue("skills", values)}
          />
          {/* <input
              id="skills"
              type="text"
              placeholder="Expertise/skills"
              {...register("skills", { required: "Skills are required" })}
              className="w-full p-2 border border-gray-300 rounded-md"
            /> */}
          {errors.skills && (
            <span className="text-red-500 text-sm">
              {errors.skills.message}
            </span>
          )}
        </div>

        <div className="flex flex-row justify-between gap-4 mt-5">
          <div className="w-1/2">
            <label
              htmlFor="experience"
              className="block text-sm font-medium text-gray-700"
            >
              Years of Experience
            </label>
            <input
              id="experience"
              type="number"
              placeholder="Years of Experience"
              {...register("experience", {
                // required: "Experience is required",
                min: { value: 0, message: "Experience cannot be negative" },
              })}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.experience && (
              <span className="text-red-500 text-sm">
                {errors.experience.message}
              </span>
            )}
          </div>

          <div className="w-1/2">
            <label
              htmlFor="teachingMode"
              className="block text-sm font-medium text-gray-700"
            >
              Preferred Teaching Mode
            </label>
            <select
              id="teachingMode"
              {...register("teachingMode", {
                // required: "This field is required",
              })}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select...</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
              <option value="Both">Both</option>
            </select>
            {errors.teachingMode && (
              <span className="text-red-500 text-sm">
                {errors.teachingMode.message}
              </span>
            )}
          </div>
        </div>

        <div className="w-full mt-5">
          <label className="block text-sm font-medium text-gray-700">
            Availability:
          </label>
          <div className="flex space-x-4">
            {["Morning", "Afternoon", "Evening", "Weekends"].map((time) => (
              <label key={time} className="flex items-center">
                <input
                  type="checkbox"
                  {...register(`availability.${time}`)}
                  className="mr-2"
                />
                {time}
              </label>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
});

export default Skills;
