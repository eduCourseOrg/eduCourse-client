import { FaUserGraduate } from "react-icons/fa6";
import { GiBookmarklet } from "react-icons/gi";
import { RiGlobalFill } from "react-icons/ri";

const Counter = () => {
    return (
        <div className="py-8 w-full bg-linear-to-r from-acent to-acent2">
            <div className="p-6 w-10/12 mx-auto bg-secondary rounded-2xl grid grid-cols-3 gap-4">
                <div className=" flex items-center justify-center gap-4">
                    <div className=""><FaUserGraduate className="text-5xl text-secondary bg-primary rounded-xl p-2"/></div>
                    <div className="">
                        <h1>22010</h1>
                        <h5>Enrolled Students</h5>
                    </div>
                </div>
                <div className=" flex items-center justify-center gap-4">
                    <div><GiBookmarklet className="text-5xl text-secondary bg-primary rounded-xl p-2"/></div>
                    <div>
                        <h1>50</h1>
                        <h5>Total Courses</h5>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <div><RiGlobalFill className="text-5xl text-secondary bg-primary rounded-xl p-2"/></div>
                    <div>
                        <h1>25</h1>
                        <h5>Countries</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;