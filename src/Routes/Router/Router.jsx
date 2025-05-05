import { createBrowserRouter } from "react-router-dom";
import About from "../../Pages/About/About";
import Blog from "../../Pages/Blog/Blog";
import {
  // AllCourse,
  // AllInstructors,
  Analytics,
  Assignment,
  BackEndAllCourse,
  BackEndAllInstructors,
  BecomeAnInstructor,
  Build,
  Certificates,
  CourseDetails,
  Courses,
  CourseSetting,
  CreateCourse,
  Credits,
  Curriculum,
  Dashboard,
  DashboardSwitch,
  Drip,
  Earnings,
  Error,
  FAQ,
  Home,
  InstructorDetails,
  Main,
  Messages,
  Notice,
  Notifications,
  Payouts,
  Pricing,
  Quiz,
  Reviews,
  Setting,
  Statements,
  Step1,
  Step2,
  Step3,
  StudentRegister,
  TextLesson,
  VideoLesson,
} from "./RouterImport";
import BlogDetails from "../../Components/Blogs/BlogDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "register",
        element: <StudentRegister></StudentRegister>,
      },
      {
        path: "/courses/:id",
        element: <CourseDetails></CourseDetails>,
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/courses/${params.id}`);
        },
      },
      {
        path: "courses",
        element: <BackEndAllCourse></BackEndAllCourse>,
      },
      {
        path: "instructorDetails",
        element: <InstructorDetails></InstructorDetails>,
      },
      {
        path: "instructors",
        element: <BackEndAllInstructors></BackEndAllInstructors>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "blogDetails",
        element: <BlogDetails></BlogDetails>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <DashboardSwitch></DashboardSwitch>,
      },
      {
        path: "courses",
        element: <Courses></Courses>,
      },
      {
        path: "analytics",
        element: <Analytics></Analytics>,
      },
      {
        path: "messages",
        element: <Messages></Messages>,
      },
      {
        path: "notifications",
        element: <Notifications></Notifications>,
      },
      {
        path: "certificates",
        element: <Certificates></Certificates>,
      },
      {
        path: "reviews",
        element: <Reviews></Reviews>,
      },
      {
        path: "earnings",
        element: <Earnings></Earnings>,
      },
      {
        path: "payout",
        element: <Payouts></Payouts>,
      },
      {
        path: "statements",
        element: <Statements></Statements>,
      },
      {
        path: "setting",
        element: <Setting></Setting>,
      },
      {
        path: "credits",
        element: <Credits></Credits>,
      },
    ],
  },
  {
    path: "/create-course",
    element: <CreateCourse></CreateCourse>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/create-course",
        element: <Curriculum></Curriculum>,
        errorElement: <Error></Error>,
        children: [
          {
            index: true,
            element: <Build></Build>,
          },
          {
            path: "text/:id",
            element: <TextLesson></TextLesson>,
          },
          {
            path: "video/:id",
            element: <VideoLesson></VideoLesson>,
          },
          {
            path: "quiz/:id",
            element: <Quiz></Quiz>,
          },
          {
            path: "assignment/:id",
            element: <Assignment></Assignment>,
          },
        ],
      },
      {
        path: "drip",
        element: <Drip></Drip>,
      },
      {
        path: "setting",
        element: <CourseSetting></CourseSetting>,
      },
      {
        path: "pricing",
        element: <Pricing></Pricing>,
      },
      {
        path: "FAQ",
        element: <FAQ></FAQ>,
      },
      {
        path: "notice",
        element: <Notice></Notice>,
      },
    ],
  },
  {
    path: "/instructorReg",
    // element: <InstructorForm></InstructorForm>,
    element: <BecomeAnInstructor></BecomeAnInstructor>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Step1></Step1>,
      },
      {
        path: "step2",
        element: <Step2></Step2>,
      },
      {
        path: "step3",
        element: <Step3></Step3>,
      },
    ],
  },
]);
