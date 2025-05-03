import axios from "axios";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useOutletContext } from "react-router-dom";
import "./BecomeAnInstructor.css";
import Field from "./Field";
import FieldSet from "./FieldSet";

const Step3 = () => {
  const navigate = useNavigate();
  const [complete, setComplete] = useState(false);
  const [instructorInfo, setInstructorInfo] = useOutletContext();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      socials: [
        {
          socialName: "",
          socialURL: "",
        },
      ],
    },
  });
  const onSubmit = async (data) => {
    // const formDataObject = new FormData();
    const finalData = { ...instructorInfo, ...data ,step3Completed:true};
    console.log("final data", finalData);
    
    // const jsonFinalData= JSON.stringify(finalData)
    // console.log("final data", jsonFinalData);
    setInstructorInfo(finalData);
    // console.log("step 3 instructorInfo Data:", instructorInfo);
    // console.log("step 3  Data:", data);
    // formDataObject.append(`etaEktaObject {}`,instructorInfo,);
    // console.log("formdata appended",formDataObject)
    try {
      console.log("Submitting Data from axios:", finalData);
      const response = await axios.post(
        "http://localhost:5000/instructors",
        finalData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        setComplete(true);
        toast.success("Form submitted successfully!");
      } else {
        toast.error("Form submition failed!!!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong!");
    }
    navigate("/instructorReg/thankyou");
  };
  const {
    fields: socialFields,
    append: addSocial,
    remove: removeSocial,
  } = useFieldArray({
    control,
    name: "socials",
  });
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[80%] mx-auto flex flex-col gap-5 mt-20 "
      >
        <FieldSet label="Enter your social account Details">
          {socialFields.map((field, index) => {
            return (
              <div
                key={field.id}
                className="flex flex-row mt-4  justify-between items-start"
              >
                <Field className="wq-label-text" label="Social Name">
                  <input
                    className="w-full px-3 py-2 border border-secondary rounded focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] focus:border-transparent transition duration-200"
                    type="text"
                    {...register(`socials[${index}].socialName`)}
                    id={`socials[${index}].socialName`}
                    name={`socials[${index}].socialName`}
                    placeholder="Name"
                  />
                </Field>
                <Field
                  className="wq-label-text"
                  label="Enter social account link"
                >
                  <input
                    className="w-full px-3 py-2 border border-secondary rounded focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] focus:border-transparent transition duration-200"
                    type="text"
                    {...register(`socials[${index}].socialURL`)}
                    id={`socials[${index}].socialURL`}
                    name={`socials[${index}].socialURL`}
                    placeholder=" Url"
                  />
                </Field>
                <button
                  className="text-2xl text-red-800 "
                  onClick={() => removeSocial(index)}
                >
                  X
                </button>
              </div>
            );
          })}

          <button
            type="button"
            className="mt-8 wq-btn"
            onClick={() => addSocial({ socialName: "", socialURL: "" })}
          >
            + Add a Social Account
          </button>
        </FieldSet>
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
        <div className="flex mt-12 justify-between">
          <button
            type="button"
            onClick={() => {
              navigate("/instructorReg/step2");
            }}
            className="wq-btn"
          >
            Previous
          </button>
          <input type="submit" value="Next" className=" wq-btn" />
        </div>
      </form>
    </div>
  );
};

export default Step3;
