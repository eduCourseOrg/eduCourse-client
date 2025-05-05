import { useFieldArray, useForm, useWatch } from "react-hook-form";
import { useNavigate, useOutletContext } from "react-router-dom";
import CustomDropdown from "../../Components/CustomDropDown";
import "./BecomeAnInstructor.css";
import Field from "./Field";
import FieldSet from "./FieldSet";
const Step2 = () => {
  const navigate = useNavigate();

  const [instructorInfo, setInstructorInfo] = useOutletContext();
  // const [selected, setSelected] = useState([]);
  const skillOptions = [
    {
      category: "Web Development",
      subCategory: ["React", "Vue", "HTML", "Node.js"],
    },
    {
      category: "Data Science",
      subCategory: ["Big Data", "Data Analytics"],
    },
    {
      category: "Cyber Security",
      subCategory: ["Security Level 1", "Security Level 2", "Security Level 3"],
    },
    {
      category: "Graphic Design",
      subCategory: ["UI", "UX", "Logo/Banner"],
    },
  ];
  const { control, register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      availability: [],
      skills: [
        {
          skillCategory: "",
          skillSubCategory: [],
        },
      ],
      profession: [
        {
          designation: "",
          organization: "",
        },
      ],
      education: [
        {
          degree: "",
          institute: "",
          year: "",
        },
      ],
    },
  });
  const selectedAvailability = watch("availability") || [];

  const handleCheckboxChange = (time) => {
    const updatedAvailability = selectedAvailability.includes(time)
      ? selectedAvailability.filter((t) => t !== time) // remove if already selected
      : [...selectedAvailability, time]; // add if not selected

    setValue("availability", updatedAvailability);
  };
  //  const { fields, append, remove } = useFieldArray({
  //    control,
  //    name: "profession",

  //  });

  const {
    fields: professionFields,
    append: addProfession,
    remove: removeProfession,
  } = useFieldArray({
    control,
    name: "profession",
  });
  const {
    fields: educationFields,
    append: addEducation,
    remove: removeEducation,
  } = useFieldArray({
    control,
    name: "education",
  });
  const {
    fields: skillsField,
    append: skillsAppend,
    remove: skillsRemove,
  } = useFieldArray({ control, name: "skills" });

  const selectedCategories = useWatch({
    control,
    name: "skills",
  });

  const onSubmit = (data) => {
    // console.log("formData array:", data);
    setInstructorInfo((pre) => ({ ...pre, ...data ,step2Completed:true}));

 navigate("/instructorReg/step3");
  };
  // console.log("selectedCategories useWatch", selectedCategories);
  // console.log("setInstructor stp 1 plus stp2", instructorInfo);
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[80%] mx-auto flex flex-col gap-5 mt-20 "
      >
        <FieldSet label="Add your Educational institute Details">
          {educationFields.map((field, index) => {
            return (
              <div
                key={field.id}
                className="flex flex-row mt-4  justify-between items-start"
              >
                <Field className="wq-label-text" label="Degree">
                  <input
                    className="wq-input"
                    type="text"
                    {...register(`education[${index}].degree`)}
                    id={`education[${index}].degree`}
                    name={`education[${index}].degree`}
                    placeholder="Your degree please"
                  />
                </Field>
                <Field className="wq-label-text" label="Institute">
                  <input
                    className="wq-input"
                    type="text"
                    {...register(`education[${index}].institute`)}
                    id={`education[${index}].institute`}
                    name={`education[${index}].institute`}
                    placeholder=" Institute  name please"
                  />
                </Field>
                <Field className="wq-label-text" label="Passing Year">
                  <input
                    className="wq-input"
                    type="number"
                    {...register(`education[${index}].year`)}
                    id={`education[${index}].year`}
                    name={`education[${index}].year`}
                    placeholder=" Passing year"
                  />
                </Field>
                <button
                  className="text-2xl text-red-800 "
                  onClick={() => removeEducation(index)}
                >
                  X
                </button>
              </div>
            );
          })}

          <button
            className="mt-8 wq-btn"
            onClick={() =>
              addEducation({ degree: "", institute: "", year: "" })
            }
          >
            + Add your Educational info
          </button>
        </FieldSet>
        {/* <FieldSet label="Enter your Skills Details">
        {skillsField.map((field, index) => {
          return (
            <div
              key={field.id}
              className="flex flex-row mt-4 gap-20 justify-center items-center"
            >
              <select
                className="w-full px-3 py-2 border border-secondary rounded focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] focus:border-transparent transition duration-200"
                {...register(`skills[${index}].skillCategory`)}
                id={`skills[${index}].skillCategory`}
                name={`skills[${index}].skillCategory`}
              >
                <option value="">Select a Category</option>
                <option value="Graphic Design">Graphic Design</option>
                <option value="Cyber Security">Cyber Security</option>
                <option value="Data Science">Data Science</option>
                <option value="Web Development">Web Development</option>
              </select>
              <select
                multiple
                className="w-full px-3 py-2 border border-secondary rounded focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] focus:border-transparent transition duration-200 h-32"
                {...register(`skills[${index}].skillSubCategory`)}
                id={`skills[${index}].skillSubCategory`}
                name={`skills[${index}].skillSubCategory`}
              >
                <option value="React">React</option>
                <option value="C#">C#</option>
                <option value="Vue">Vue</option>
                <option value="Figma">Figma</option>
                <option value="PenTesting">PenTesting</option>
                <option value="Big Data">Big Data</option>
                <option value="Data Analytics">Data Analytics</option>
                <option value="Node.js">Node.js</option>
              </select>

              <button
                className="text-2xl text-red-800 "
                onClick={() => skillsRemove(index)}
              >
                X
              </button>
            </div>
          );
        })}

        <button
          className="mt-8 py-1 px-5 border rounded-md bg-primary text-secondary w-fit"
          onClick={() =>
            skillsAppend({ skillCategory: "", skillSubCategory: [] })
          }
        >
         + Add your Skills details
        </button>
      </FieldSet> */}
        <FieldSet label="Skills details">
          {skillsField.map((field, index) => {
            const selectedCategory = selectedCategories?.[index]?.skillCategory;

            const subCategories =
              skillOptions.find((opt) => opt.category === selectedCategory)
                ?.subCategory || [];

            return (
              <div
                key={field.id}
                className="flex flex-row mt-4 gap-5 justify-between items-start"
              >
                {/* Category Dropdown */}
                <select
                  {...register(`skills.${index}.skillCategory`, {
                    required: true,
                  })}
                  className="wq-input"
                >
                  <option className="wq-label-text" value="">
                    Select a Category
                  </option>
                  {skillOptions.map((opt) => (
                    <option
                      className="wq-label-text"
                      key={opt.category}
                      value={opt.category}
                    >
                      {opt.category}
                    </option>
                  ))}
                </select>

                {/* Sub-category Multi Select */}
                {selectedCategory && (
                  <CustomDropdown
                    className={"w-full"}
                    options={subCategories}
                    selected={
                      selectedCategories?.[index]?.skillSubCategory || []
                    }
                    setSelected={(newSelected) =>
                      setValue(`skills.${index}.skillSubCategory`, newSelected)
                    }
                  ></CustomDropdown>

                  // <select
                  //   {...register(`skills.${index}.skillSubCategory`)}

                  //   className="w-full p-2 border rounded h-32"
                  // >
                  // {subCategories.map((sub, subIdx) => (
                  //   <option key={subIdx} value={sub}>
                  //     {sub}
                  //   </option>
                  // ))}
                  // </select>
                )}

                <button
                  type="button"
                  onClick={() => skillsRemove(index)}
                  className="text-2xl text-red-800"
                >
                  X
                </button>
              </div>
            );
          })}

          <button
            type="button"
            onClick={() =>
              skillsAppend({
                skillCategory: "",
                skillSubCategory: [],
              })
            }
            className="mt-8 wq-btn"
          >
            + Add Skill Category
          </button>
        </FieldSet>
        <FieldSet label="Enter your Professional Details">
          {professionFields.map((field, index) => {
            return (
              <div
                key={field.id}
                className="flex flex-row mt-4  justify-between items-start"
              >
                <Field className="wq-label-text" label="Designation">
                  <input
                    className="wq-input"
                    type="text"
                    {...register(`profession[${index}].designation`)}
                    id={`profession[${index}].designation`}
                    name={`profession[${index}].designation`}
                    placeholder="Your Designation please"
                  />
                </Field>
                <Field className="wq-label-text" label="Organization">
                  <input
                    className="wq-input"
                    type="text"
                    {...register(`profession[${index}].organization`)}
                    id={`profession[${index}].organization`}
                    name={`profession[${index}].organization`}
                    placeholder=" organization  name please"
                  />
                </Field>
                <button
                  className="text-2xl text-red-800 "
                  onClick={() => removeProfession(index)}
                >
                  X
                </button>
              </div>
            );
          })}

          <button
            type="button"
            className="mt-8 wq-btn"
            onClick={() => addProfession({ designation: "", organization: "" })}
          >
            + Add a professional info
          </button>
        </FieldSet>
        <div className="flex flex-row gap-10 w-1/2 items-center">
          <label htmlFor="yearsOfExperience" className="wq-label-text w-1/2">
            Years Of Experience :
          </label>
          <input
            className="wq-input"
            type="number"
            name="yearsOfExperience"
            id="yearsOfExperience"
            {...register("yearsOfExperience", { required: true })}
          />
        </div>

        <div className="flex flex-row gap-10 ">
          <label htmlFor="teachingMode" className="wq-label-text ">
            Which method you preferred to teach :
          </label>
          <select
            className="wq-input"
            name="teachingMode"
            id="teachingMode"
            {...register("teachingMode", { required: "true" })}
          >
            <option value="online">Online</option>
            <option value="offline">Offline</option>
            <option value="both">Both</option>
          </select>
        </div>

        <div className="flex space-x-6 ">
          <label htmlFor="availability" className="wq-label-text">
            Availability :
          </label>
          {["morning", "afternoon", "night", "late-night"].map((time) => (
            <div key={time} className="text-md text-primary flex gap-2 ">
              <input
                type="checkbox"
                id={time}
                name={time}
                checked={selectedAvailability.includes(time)}
                onChange={() => handleCheckboxChange(time)}
                className="mr-2"
              />
              <label htmlFor={time}>{time}</label>
            </div>
          ))}
        </div>

        <div className="flex mt-12 justify-between">
          <button
            type="button"
            onClick={() => {
              navigate("/instructorReg");
            }}
            className="wq-btn"
          >
            Previous
          </button>
          <input type="submit" value="Next" className="wq-btn" />
        </div>
      </form>
    </>
  );
};

export default Step2;
