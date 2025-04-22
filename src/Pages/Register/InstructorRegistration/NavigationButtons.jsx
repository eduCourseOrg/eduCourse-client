/* eslint-disable react/prop-types */


const NavigationButtons = ({
  currentStep,
  steps,
  setCurrentStep,
  handleNext,
  complete,
}) => {
  return (
    <div className="flex justify-between mt-4">
      <button
        className="cusBtn prev-btn disabled:opacity-50"
        onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 1))}
        disabled={currentStep === 1 || complete}
        aria-label="Go to previous step"
      >
        Previous
      </button>

      <button
        className="cusBtn next-btn"
        type="button"
        onClick={handleNext}
       
      >
        {currentStep === steps.length ? "Submit" : "Next"}
      </button>
    </div>
  );
};

export default NavigationButtons;