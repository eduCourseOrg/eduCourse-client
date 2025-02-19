import { useState } from 'react';
import { TiTick } from "react-icons/ti";
import "../../customCSS/multiStepForm.css";
import CustomerInfoForm from './Form/CustomerInfoForm';
import FinalStepForm from './Form/FinalStepForm';
import PaymentForm from './Form/PaymentForm ';
import ShippingInfoForm from './Form/ShippingInfoForm';

const FormTeest = () => {
 const steps = ["Customer Info", "Shipping Info", "Payment", "Step 4"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  // Form Data State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    cardNumber: "",
    expiryDate: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Form Components for Each Step
  const stepForms = [
    <CustomerInfoForm key="1" formData={formData} handleChange={handleChange} />,
    <ShippingInfoForm key="2" formData={formData} handleChange={handleChange} />,
    <PaymentForm key="3" formData={formData} handleChange={handleChange} />,
    <FinalStepForm key="4" formData={formData} />,
  ];

  return (
    <>
      {/* Step Indicators */}
      <div className="flex justify-between">
        {steps.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 ? "active" : ""} ${
              (i + 1 < currentStep || complete) ? "complete" : ""
            }`}
          >
            <div className="step">
              {i + 1 < currentStep  ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="text-gray-500">{step}</p>
          </div>
        ))}
      </div>

      {/* Step Forms */}
      <div className="form-container">{stepForms[currentStep - 1]}</div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-4">
        <button
          className="btn prev-btn"
          onClick={
            () => {
              
            setCurrentStep((prev) => Math.max(prev - 1, 1))
          
          }
            
          }
          disabled={currentStep === 1 ||  complete}
        >
          Previous
        </button>

        <button
          className="btn next-btn"
          onClick={() => {
            if (currentStep === steps.length) {
              setComplete(true);
              console.log("Final Submitted Data:", formData); // Log the final data
            } else {
              setCurrentStep((prev) => prev + 1);
            }
          }}
        >
          {currentStep === steps.length ? "Submit" : "Next"}
        </button>
      </div>
    </>
  );
};
export default FormTeest;