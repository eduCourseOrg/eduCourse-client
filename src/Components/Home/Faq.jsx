import { useState } from 'react';
import { FaPlusCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What is React?',
      answer: 'React is a JavaScript library for building user interfaces.',
    },
    {
      question: 'How does React work?',
      answer: 'React uses a virtual DOM to efficiently update the UI.',
    }
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="flex flex-col gap-10 p-4">
          <div className='flex flex-col gap-1 items-center'>
              <h3 className='text-sm font-semibold text-gray-500 tracking-wide'>ALL YOU NEED TO KNOW</h3>
            <h1 className='text-4xl font-bold'>FREQUENTLY ASKED QUESTIONS</h1>
        </div>
      <ul className='flex flex-col gap-2'>
        {faqs.map((faq, index) => (
            <li key={index} className={`${activeIndex === index && 'border-2 border-[var(--color-primary)]'}`}>
                {/* FAQ Question */}
            <button 
              className={`${activeIndex === index ? 'bg-[var(--color-primary)] text-[var(--color-secondary)]' : 'bg-[var(--color-secondary)]'} p-4 w-full text-left flex items-center gap-3`} 
              onClick={() => toggleAnswer(index)}
            >
              {activeIndex === index ? <FaCircleMinus></FaCircleMinus> : <FaPlusCircle></FaPlusCircle>} {faq.question}
            </button>
                {/* FAQ Answere */}
            {activeIndex === index && (
              <div className="w-full p-4">{faq.answer}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faq;