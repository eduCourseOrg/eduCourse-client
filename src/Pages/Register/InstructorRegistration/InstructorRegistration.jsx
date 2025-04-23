import axios from "axios";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

import Confirmation from "../Form/Confirmation";
import EducationalInfo from "../Form/EducationalInfo";
import PersonalInfo from "../Form/PersonalInfo";
import Skills from "../Form/Skills";
import "./MultiStepForm.css";
import NavigationButtons from "./NavigationButtons";
import StepIndicator from "./StepIndicator";
import ThankYou from "./ThankYou";
const InstructorRegistration = () => {
  const personalInfoRef = useRef(null);
  const educationalInfoRef = useRef(null);
  const skillsRef = useRef(null);
  const confirmationRef = useRef(null);

  // Steps & State
  const steps = ["Personal Info", "Education", "Skills", "Confirmation"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const [formData, setFormData] = useState({});

  // Handles final form submission
  // const handleFinalSubmit = async (finalData) => {
  //   const formDataObject = new FormData();

  //   // Append all non-file form fields
  //   Object.keys(finalData).forEach((key) => {
  //     if (key !== "profile" && key !== "resume") {
  //       formDataObject.append(key, finalData[key]);
  //     }
  //   });

  //   // Append files if they exist
  //   if (finalData.profile?.length) {
  //     formDataObject.append("profile", finalData.profile[0]);
  //   }
  //   if (finalData.resume?.length) {
  //     formDataObject.append("resume", finalData.resume[0]);
  //   }

  //   try {
  //     console.log("Submitting Data:", formDataObject);
  //     const response = await axios.post(
  //       "http://localhost:5000/instructors",
  //       formDataObject,
  //       { headers: { "Content-Type": "multipart/form-data" } }
  //     );

  //     if (response.data.success) {
  //       alert("Form submitted successfully!");
  //     } else {
  //       alert("Submission failed!");
  //     }
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //     alert("Something went wrong!");
  //   }
  // };
  const handleFinalSubmit = async (finalData) => {
    const formDataObject = new FormData();
console.log("the final data",finalData)
    // Append all non-file form fields
    Object.keys(finalData).forEach((key) => {
      const value = finalData[key];
      console.log("keyyy", key, finalData[key]);
      if (key !== "profile" && key !== "resume") {
        if (Array.isArray(value) && typeof value[0] !== "object") {
          value.forEach((item) => {
            formDataObject.append(`${key}[]`, item);
          });
        }

        // 👉 Handle arrays of objects
        else if (Array.isArray(value) && typeof value[0] === "object") {
          value.forEach((obj, index) => {
            Object.keys(obj).forEach((field) => {
              formDataObject.append(`${key}[${index}][${field}]`, obj[field]);
            });
          });
        } else {
          formDataObject.append(key, value);
        }
      }
    });

    // Append files if they exist
    if (finalData.profile && finalData.profile.length > 0) {
      formDataObject.append("profile", finalData.profile[0]);
    }
    if (finalData.resume && finalData.resume.length > 0) {
      formDataObject.append("resume", finalData.resume[0]);
    }

    try {
      console.log("Submitting Data:", formDataObject);
      const response = await axios.post(
        "http://localhost:5000/instructors",
        formDataObject,
        {
          headers: { "Content-Type": "multipart/form-data" },
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
  };
  // Handles step navigation & form submission
  const handleNext = () => {
    const stepRefs = [
      personalInfoRef,
      educationalInfoRef,
      skillsRef,
      confirmationRef,
    ];
    if (stepRefs[currentStep - 1]?.current) {
      stepRefs[currentStep - 1].current.submitForm();
    }
  };

  // Step Components
  const stepForms = [
    <PersonalInfo
      key="1"
      formData={formData}
      setFormData={setFormData}
      setCurrentStep={setCurrentStep}
      ref={personalInfoRef}
    />,
    <EducationalInfo
      key="2"
      formData={formData}
      setFormData={setFormData}
      setCurrentStep={setCurrentStep}
      ref={educationalInfoRef}
    />,
    <Skills
      key="3"
      formData={formData}
      setFormData={setFormData}
      setCurrentStep={setCurrentStep}
      ref={skillsRef}
    />,
    <Confirmation
      key="4"
      formData={formData}
      setFormData={setFormData}
      handleFinalSubmit={handleFinalSubmit}
      setCurrentStep={setCurrentStep}
      ref={confirmationRef}
    />,
  ];

  return (
    <>
      {/* <TextEditor /> */}
      <div className="wq-form-container">
        {complete ? (
          <ThankYou></ThankYou>
        ) : (
          <>
            <StepIndicator
              steps={steps}
              currentStep={currentStep}
              complete={complete}
            />
            <div>{stepForms[currentStep - 1]}</div>
            <NavigationButtons
              currentStep={currentStep}
              steps={steps}
              setCurrentStep={setCurrentStep}
              handleNext={handleNext}
              complete={complete}
            />
          </>
        )}
      </div>
    </>
  );
};

export default InstructorRegistration;
