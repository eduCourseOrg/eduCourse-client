import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home";
import Error from "../../Pages/Error/Error";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import AllCourse from "../../Pages/AllCoursePage/AllCourse";

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
          path: '/courseDetails',
          element: <CourseDetails></CourseDetails>
        },
        {
          path: '/courses',
          element: <AllCourse></AllCourse>
        }
    ]
  },
]);