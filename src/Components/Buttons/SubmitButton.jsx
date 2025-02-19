/* eslint-disable react/prop-types */
const SubmitButton = ({btnText}) => {
    return (
        <button className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-gray-800 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-teal-800 hover:before:h-56 hover:before:w-56">
      <span className="relative z-10">{btnText}</span>
    </button>

    );
};

export default SubmitButton;