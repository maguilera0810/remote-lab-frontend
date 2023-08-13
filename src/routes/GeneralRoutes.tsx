import { RouteObject } from "react-router-dom";
import {
  LoginPage,
  SignupPage,
  HomePage,
  SchoolDetailPage,
  SchoolListPage,
  ErrorPage
} from '../pages'


const generalRoutes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/school",
    element: <SchoolListPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/school/:schoolId",
    element: <SchoolDetailPage />,
    errorElement: <ErrorPage />,
  },
];

export default generalRoutes