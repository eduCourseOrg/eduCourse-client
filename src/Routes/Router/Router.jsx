import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AllCourse from "../../Pages/AllCoursePage/AllCourse";
import AllInstructors from "../../Pages/AllInstructors/AllInstructors";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home";
import InstructorDetails from "../../Pages/InstructorDetails/InstructorDetails";

import InstructorRegistration from "../../Pages/Register/InstructorRegistration/InstructorRegistration";
import StudentRegister from "../../Pages/Register/StudentRegister";

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
        path: "/courses/:id",
        element: <CourseDetails></CourseDetails>,
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/courses/${params.id}`),
      },
      {
        path: "/instructorReg",
        element: <InstructorRegistration></InstructorRegistration>
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
