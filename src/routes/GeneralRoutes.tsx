import { User } from "../interfaces/AuthInterfaces";
import { Navigate, RouteObject } from 'react-router-dom';
import {
  LoginPage,
  SignupPage,
  HomePage,
  SchoolDetailPage,
  SchoolListPage,
  SubjectListPage,
  SubjectDetailPage,
  ErrorPage
} from '../pages'


const GeneralRoutes = (user: User | null, token: string | null): RouteObject[] => {
  const RenderBasedOnAuth = (authenticatedComponent: React.ReactElement, redirectPath: string = '/login') => (token && user) ? authenticatedComponent : <Navigate to={redirectPath} />;
  return [
    {
      path: "/",
      element: RenderBasedOnAuth(<HomePage />),
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
      element: RenderBasedOnAuth(<SchoolListPage />),
      errorElement: <ErrorPage />,
    },
    {
      path: "/school/:schoolId",
      element: RenderBasedOnAuth(<SchoolDetailPage />),
      errorElement: <ErrorPage />,
    },
    {
      path: "/subject",
      element: RenderBasedOnAuth(<SubjectListPage />),
      errorElement: <ErrorPage />,
    },
    {
      path: "/subject/:subjectId",
      element: RenderBasedOnAuth(<SubjectDetailPage />),
      errorElement: <ErrorPage />,
    },
  ];

}


export default GeneralRoutes;



