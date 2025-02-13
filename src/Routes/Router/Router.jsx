import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home";
import Error from "../../Pages/Error/Error";
import StudentRegister from "../../Pages/Register/StudentRegister";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";

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
        }
    ]
  },
]);