import { SiDatabricks } from "react-icons/si";
import { FaComputer } from "react-icons/fa6";
import { MdEngineering } from "react-icons/md";
import { LuMonitorCog } from "react-icons/lu";
const Categories = () => {
    return (
        <div className="w-full border-2 py-4">
            <div className="text-center mb-8">
                <h1 className="mx-auto text-3xl mb-2">Choose a Categories</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aperiam id quisquam</p>
            </div>
            
            <div className="w-10/12 mx-auto grid grid-cols-4 gap-8">
                <div className="bg-accent flex flex-col items-center justify-center mx-auto py-4 px-12 rounded-xl w-full">
                    <div className="bg-white rounded-2xl p-2 mb-4">
                        <SiDatabricks className="text-5xl text-primary mx-auto"/>
                    </div>
                    <div className="text-center">
                        <h1 className="text-lg font-semibold">Data Science</h1>
                        <p>15 Courses</p>
                    </div>
                    
                </div>
                <div className="bg-accent flex flex-col items-center justify-center mx-auto py-4 px-12 rounded-xl w-full">
                    <div className="bg-white rounded-2xl p-2 mb-4">
                        <FaComputer className="text-5xl text-primary mx-auto"/>
                    </div>
                    <div className="text-center">
                        <h1 className="text-lg font-semibold">IT & Software</h1>
                        <p>20 Courses</p>
                    </div>
                    
                </div>
                <div className="bg-accent flex flex-col items-center justify-center mx-auto py-4 px-12 rounded-xl w-full">
                    <div className="bg-white rounded-2xl p-2 mb-4">
                        <MdEngineering className="text-5xl text-primary mx-auto"/>
                    </div>
                    <div className="text-center">
                        <h1 className="text-lg font-semibold">Engineering</h1>
                        <p>22 Courses</p>
                    </div>
                    
                </div>
                <div className="bg-accent flex flex-col items-center justify-center mx-auto py-4 px-12 rounded-xl w-full">
                    <div className="bg-white rounded-2xl p-2 mb-4">
                        <LuMonitorCog className="text-5xl text-primary mx-auto"/>
                    </div>
                    <div className="text-center">
                        <h1 className="text-lg font-semibold">Web Development</h1>
                        <p>26 Courses</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Categories;