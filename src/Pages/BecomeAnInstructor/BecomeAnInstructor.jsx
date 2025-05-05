import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const BecomeAnInstructor = () => {
  const navigate = useNavigate();
  const [instructorInfo, setInstructorInfo] = useState({
    step1Completed: false,
    step2Completed: false,
    step3Completed: false,
  });
  console.log("personal From setInstructor", instructorInfo);
  return (
    <div className="w-full h-screen flex border border-red-500">
      <div className="w-[25%] h-full flex flex-col gap-4 bg-[#e0f9f6] p-4 text-primary">
        <button
          onClick={() => {
            navigate("/");
          }}
          className="px-2 rounded-md border w-fit"
        >
          Exit and Close
        </button>
        <h1>
          Start your Publishing journey with EduCourse in just few simple steps
        </h1>
        <NavLink
          to="/instructorReg"
          end
          className={({ isActive }) =>
            `${
              isActive && "border border-[var(--color-primary)]"
            } bg-white px-2 py-1 rounded`
          }
        >
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold">Step - 1</h3>
              <p>Add Your Personnel Info</p>
            </div>
            <button className="px-2 rounded-md border border-primary w-fit h-fit">
              {instructorInfo.step1Completed ? "Completed" : "Pending"}
            </button>
          </div>
        </NavLink>
        <NavLink
          to="step2"
          className={({ isActive }) =>
            `${
              isActive && "border border-[var(--color-primary)]"
            } bg-white px-2 py-1 rounded`
          }
        >
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold">Step - 2</h3>
              <p>Add Your Professional Info</p>
            </div>
            <button className="px-2 rounded-md border border-primary w-fit h-fit">
              {instructorInfo.step2Completed ? "Completed" : "Pending"}
            </button>
          </div>
        </NavLink>
        <NavLink
          to="step3"
          className={({ isActive }) =>
            `${
              isActive && "border border-[var(--color-primary)]"
            } bg-white px-2 py-1 rounded`
          }
        >
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold">Step - 3</h3>
              <p>Submit For approval</p>
            </div>
            <button className="px-2 rounded-md border border-primary w-fit h-fit">
              {instructorInfo.step3Completed ? "Completed" : "Pending"}
            </button>
          </div>
        </NavLink>
      </div>
      <div className="w-[75%] h-full py-4 overflow-y-scroll">
        <Outlet context={[instructorInfo, setInstructorInfo]} />
      </div>
    </div>
  );
};

export default BecomeAnInstructor;
