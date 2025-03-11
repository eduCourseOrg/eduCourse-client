import { createBrowserRouter } from "react-router-dom";
import {
  Main,
  AllCourse,
  AllInstructors,
  CourseDetails,
  Error,
  Home,
  InstructorDetails,
  InstructorForm,
  StudentRegister,
  Dashboard,
  DashboardSwitch,
  Courses,
  Analytics,
  CreateCourse,
  Messages,
  Notifications,
  Certificates,
  Reviews,
  Earnings,
  Payouts,
  Statements,
  Setting,
  Credits, 
  Curriculum,
  Drip,
  CourseSetting,
  Pricing,
  FAQ,
  Notice,
  Build,
  TextLesson,
  VideoLesson,
  Quiz,
  Assignment} from './RouterImport';

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
        path: "courses/:id",
        element: <CourseDetails></CourseDetails>,
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/courses/${params.id}`),
      },
      {
        path: "instructorReg",
        element: <InstructorForm></InstructorForm>,
      },
      {
        path: "courses",
        element: <AllCourse></AllCourse>,
      },
      {
        path: "instructorDetails",
        element: <InstructorDetails></InstructorDetails>,
      },
      {
        path: "instructors",
        element: <AllInstructors></AllInstructors>,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <DashboardSwitch></DashboardSwitch>
      },
      {
        path: 'courses', 
        element: <Courses></Courses>
      },
      {
        path: 'analytics',
        element: <Analytics></Analytics>
      },
      {
        path: 'messages',
        element: <Messages></Messages>
      },
      {
        path: 'notifications',
        element: <Notifications></Notifications>
      },
      {
        path: 'certificates',
        element: <Certificates></Certificates>
      },
      {
        path: 'reviews',
        element: <Reviews></Reviews>
      },
      {
        path: 'earnings',
        element: <Earnings></Earnings>
      },
      {
        path: 'payout',
        element: <Payouts></Payouts>
      },
      {
        path: 'statements',
        element: <Statements></Statements>
      },
      {
        path: 'setting',
        element: <Setting></Setting>
      },
      {
        path: 'credits',
        element: <Credits></Credits>
      }
    ]
  },
  {
    path: '/create-course',
    element: <CreateCourse></CreateCourse>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/create-course',
        element: <Curriculum></Curriculum>,
        errorElement: <Error></Error>,
        children: [
          {
            index: true,
            element: <Build></Build>
          },
          {
            path: 'text/:id',
            element: <TextLesson></TextLesson>
          },
          {
            path: 'video/:id',
            element: <VideoLesson></VideoLesson>
          },
          {
            path: 'quiz/:id',
            element: <Quiz></Quiz>
          },
          {
            path: 'assignment/:id',
            element: <Assignment></Assignment>
          }
        ]
      },
      {
        path: 'drip',
        element: <Drip></Drip>
      },
      {
        path: 'setting',
        element: <CourseSetting></CourseSetting>
      },
      {
        path: 'pricing',
        element: <Pricing></Pricing>
      },
      {
        path: 'FAQ',
        element: <FAQ></FAQ>
      },
      {
        path: 'notice',
        element: <Notice></Notice>
      }
    ]
  }
]);
