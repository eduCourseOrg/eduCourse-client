
const NewButton = () => {
    return (
      <div>
<button className="h-[40px] w-[80px] relative  before:h-full before:w-full before:border-2 before:border-red-500 before:absolute before:left-0 before:top-0 before:">
        Click
    </button>
    <button className="relative flex items-center justify-center h-14 w-48 text-black font-bold text-lg bg-white border-2 border-transparent rounded-full overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-red-500 before:via-yellow-500 before:to-blue-500 before:rounded-full before:animate-gradient">
  <span className="relative z-10">Pay Now</span>
</button>
      </div>
    
    );
};

export default NewButton;