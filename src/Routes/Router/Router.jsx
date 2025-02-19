import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AllCourse from "../../Pages/AllCoursePage/AllCourse";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home";
import InstructorForm from "../../Pages/Register/InstructorForm";
import StudentRegister from "../../Pages/Register/StudentRegister";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path:'/register',
          element:<StudentRegister></StudentRegister>
        },
        {
          path: '/courseDetails',
          element: <CourseDetails></CourseDetails>
        },
        {
          path:'/instructorReg',
          // element:<InstructorRegistration></InstructorRegistration>
          element:<InstructorForm></InstructorForm>
          
        },
        {
          path: '/courses',
          element: <AllCourse></AllCourse>
        }
    ]
  },
]);