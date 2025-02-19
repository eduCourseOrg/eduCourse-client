/* eslint-disable react/prop-types */

const Button = ({BtnText}) => {
    return (
        <div>
               <div className="flex my-8 m-auto w-2/3 rounded-lg text-teal-800 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-700  p-0.5 shadow-lg hover:from-teal-700 hover:via-green-500 hover:to-teal-300  transition-all duration-300 ">
    <button className="flex-1 font-bold text-[16px] bg-white px-1 py-1 rounded-lg cursor-pointer animate-spin  ">{BtnText}</button>
    
</div>
        </div>
    );
};

export default Button;