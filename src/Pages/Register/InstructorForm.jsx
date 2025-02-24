import { useRef, useState } from "react";
import { TiTick } from "react-icons/ti";
import Confirmation from "./Form/Confirmation";
import EducationalInfo from "./Form/EducationalInfo";
import PersonalInfo from "./Form/PersonalInfo";
import Skills from "./Form/Skills";
import "./MultiStepForm.css";

const InstructorForm = () => {
  // Refs for form components
  const personalInfoRef = useRef(null);
  const educationalInfoRef = useRef(null);
  const skillsRef = useRef(null);
  const confirmationRef = useRef(null);

  // Steps
  const steps = ["Personal Info", "Education", "Skills", "Confirmation"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const [formData, setFormData] = useState({});

  // Handles final form submission
  const handleFinalSubmit = (finalData) => {
    console.log("Submitting Final Data:", finalData);

   
  };

  // Handles step navigation & form submission
  const handleNext = () => {
    if (currentStep === 1 && personalInfoRef.current) {
      personalInfoRef.current.submitForm();
    } else if (currentStep === 2 && educationalInfoRef.current) {
      educationalInfoRef.current.submitForm();
    } else if (currentStep === 3 && skillsRef.current) {
      skillsRef.current.submitForm();
    } else if (currentStep === 4 && confirmationRef.current) {
      confirmationRef.current.submitForm(); // Submit final form
    }
  };

  // Step Components
  const stepForms = [
    <PersonalInfo
      key="1"
      formData={formData}
      setFormData={setFormData}
      ref={personalInfoRef}
      setCurrentStep={setCurrentStep}
    />,
    <EducationalInfo
      key="2"
      formData={formData}
      setFormData={setFormData}
      ref={educationalInfoRef}
      setCurrentStep={setCurrentStep}
    />,
    <Skills
      key="3"
      formData={formData}
      setFormData={setFormData}
      ref={skillsRef}
      setCurrentStep={setCurrentStep}
    />,
    <Confirmation
      key="4"
      formData={formData}
      setFormData={setFormData}
      ref={confirmationRef}
      handleFinalSubmit={handleFinalSubmit}
    />,
  ];

  return (
    <div className="wq-form-container">
      {/* Step Indicators */}
      <div className="flex justify-between">
        {steps.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 ? "active" : ""} ${
              i + 1 < currentStep || complete ? "complete" : ""
            }`}
          >
            <div className="step">
              {i + 1 < currentStep ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="text-gray-500">{step}</p>
          </div>
        ))}
      </div>

      {/* Step Forms */}
      <div className="">{stepForms[currentStep - 1]}</div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-4">
        <button
          className="cusBtn prev-btn"
          onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 1))}
          disabled={currentStep === 1 || complete}
        >
          Previous
        </button>

        {currentStep === steps.length ? (
          <button
            className="cusBtn next-btn"
            type="button"
            onClick={handleNext}
          >
            Submit
          </button>
        ) : (
          <button
            className="cusBtn next-btn"
            type="button"
            onClick={handleNext}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default InstructorForm;
