import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AllCourse from "../../Pages/AllCoursePage/AllCourse";
import AllInstructors from "../../Pages/AllInstructors/AllInstructors";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home";
import InstructorRegistration from "../../Pages/Register/InstructorRegistration";
import StudentRegister from "../../Pages/Register/StudentRegister";
import InstructorDetails from "../../Pages/InstructorDetails/InstructorDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <StudentRegister></StudentRegister>,
      },
      {
        path: "/courseDetails",
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: "/instructorReg",
        element: <InstructorRegistration></InstructorRegistration>,
      },
      {
        path: "/courses",
        element: <AllCourse></AllCourse>,
      },
      {
        path: "/instructorDetails",
        element: <InstructorDetails></InstructorDetails>,
      },
      {
        path: "/instructors",
        element: <AllInstructors></AllInstructors>,
      },
    ],
  },
]);
