import { FaUserGraduate } from "react-icons/fa6";
import { GiBookmarklet } from "react-icons/gi";
import { RiGlobalFill } from "react-icons/ri";

const Counter = () => {
    return (
            <div className="w-full px-6 py-5 grid grid-cols-3 gap-4 shadow-xl rounded-md bg-white">
                <div className="w-full flex items-center gap-3 lg:gap-4">
                    <div className="p-3 bg-[var(--color-primary)] text-[var(--color-secondary)] flex items-center justify-center text-2xl lg:text-5xl rounded-lg"><FaUserGraduate/></div>
                    <div className="h-full w-full flex flex-col justify-center gap-1">
                        <h1 className="text-lg lg:text-3xl font-bold">22010+</h1>
                        <h5 className="lg:text-lg">Students</h5>
                    </div>
                </div>
                <div className="w-full flex items-center gap-3 lg:gap-4">
                    <div className="p-3 bg-[var(--color-primary)] text-[var(--color-secondary)] flex items-center justify-center text-2xl lg:text-5xl rounded-lg"><GiBookmarklet/></div>
                    <div className="h-full w-full flex flex-col justify-center gap-1">
                        <h1 className="text-lg lg:text-3xl font-bold">1024+</h1>
                        <h5 className="lg:text-lg">Courses</h5>
                    </div>
                </div>
                <div className="w-full flex items-center gap-3 lg:gap-4">
                    <div className="p-3 bg-[var(--color-primary)] text-[var(--color-secondary)] flex items-center justify-center text-2xl lg:text-5xl rounded-lg"><RiGlobalFill/></div>
                    <div className="h-full w-full flex flex-col justify-center gap-1">
                        <h1 className="text-lg lg:text-3xl font-bold">110</h1>
                        <h5 className="lg:text-lg">Countries</h5>
                    </div>
                </div>
            </div>
    );
};

export default Counter;