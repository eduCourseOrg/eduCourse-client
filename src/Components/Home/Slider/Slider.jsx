import { useEffect, useState } from "react";

const Slider = () => {
  const slides = ["red", "blue", "green", "yellow", "purple"];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative w-[300px] h-[200px] overflow-hidden border-2 border-black">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((color, index) => (
          <div
            key={index}
            className="w-full h-[200px] flex items-center justify-center text-white text-2xl font-bold"
            style={{ backgroundColor: color, flexShrink: 0, width: "300px" }}
          >
            {index + 1}
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded"
      >
        ⬅
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded"
      >
        ➡
      </button>
    </div>
  );
};

export default Slider;
