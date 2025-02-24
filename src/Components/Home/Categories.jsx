import { SiDatabricks } from "react-icons/si";
import { FaComputer } from "react-icons/fa6";
import { MdEngineering } from "react-icons/md";
import { LuMonitorCog } from "react-icons/lu";
const Categories = () => {
    return (
        <div className="w-full p-6 flex flex-col gap-6 bg-white shadow-lg rounded-md">
            <div className="w-full flex flex-col gap-2 items-center justify-center">
                <h1 className="text-4xl font-bold text-[var(--color-primary)]">Choose a Categories</h1>
                <p className="text-lg">Finish everythig what you have started. Let&apos;s start form here. </p>
            </div>
            
            <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-5">
                <div className="w-full bg-[var(--color-secondary)] shadow-lg flex lg:flex-col items-center justify-center rounded-xl p-4 gap-3">
                    <div className="bg-white rounded-2xl p-2">
                        <SiDatabricks className="text-5xl text-primary mx-auto"/>
                    </div>
                    <div className="text-start lg:text-center">
                        <h1 className="text-xl font-bold">Data Science</h1>
                        <p className="font-semibold">15 Courses</p>
                    </div>
                    
                </div>
                <div className="w-full bg-[var(--color-secondary)] shadow-lg flex lg:flex-col items-center justify-center rounded-xl p-4 gap-3">
                    <div className="bg-white rounded-2xl p-2">
                        <FaComputer className="text-5xl text-primary mx-auto"/>
                    </div>
                    <div className="text-start lg:text-center">
                        <h1 className="text-xl font-bold">IT & Softwere</h1>
                        <p className="font-semibold">20 Courses</p>
                    </div>
                    
                </div>
                <div className="w-full bg-[var(--color-secondary)] shadow-lg flex lg:flex-col items-center justify-center rounded-xl p-4 gap-3">
                    <div className="bg-white rounded-2xl p-2">
                        <MdEngineering className="text-5xl text-primary mx-auto"/>
                    </div>
                    <div className="text-start lg:text-center">
                        <h1 className="text-xl font-bold">Engineering</h1>
                        <p className="font-semibold">12 Courses</p>
                    </div>
                    
                </div>
                <div className="w-full bg-[var(--color-secondary)] shadow-lg flex lg:flex-col items-center justify-center rounded-xl p-4 gap-3">
                    <div className="bg-white rounded-2xl p-2">
                        <LuMonitorCog className="text-5xl text-primary mx-auto"/>
                    </div>
                    <div className="text-start lg:text-center">
                        <h1 className="text-xl font-bold">Web Development</h1>
                        <p className="font-semibold">30 Courses</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Categories;