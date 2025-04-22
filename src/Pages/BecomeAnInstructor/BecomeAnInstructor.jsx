import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const BecomeAnInstructor = () => {
    const [instructorInfo, setInstructorInfo] = useState({});
    return (
        <div className="w-full h-screen flex border border-red-500">
            <div className="w-[25%] h-full flex flex-col gap-4 bg-[#e0f9f6] p-4 text-primary">
                <button className="px-2 rounded-md border w-fit">Exit and Close</button>
                <h1>Start your Publishing journey with EduCourse in just few simple steps</h1>
                <NavLink to="/instructorReg" end>
                    <div>Step 1</div>
                </NavLink>
                <NavLink to="step2">
                    <div>Step 2</div>
                </NavLink>
                <NavLink to="step3">
                    <div>Step 3</div>
                </NavLink>
            </div>
            <div className="w-[75%] h-full py-4 overflow-y-scroll">
                <Outlet context={[instructorInfo, setInstructorInfo]}/>
            </div>
        </div>
    );
};

export default BecomeAnInstructor;