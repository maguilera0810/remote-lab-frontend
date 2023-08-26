import { User } from "../interfaces/AuthInterfaces";
import { Navigate, RouteObject } from 'react-router-dom';
import {
  LoginPage,
  // SignupPage,
  HomePage,
  SchoolDetailPage,
  SchoolListPage,
  SubjectListPage,
  SubjectDetailPage,
  LaboratoryListPage,
  LaboratoryDetailPage,
  ErrorPage,
} from '../pages'

const GeneralRoutes = (user: User | null, token: string | null): RouteObject[] => {

  const isAuth = !!token && !!user
  const RenderBasedOnAuth = (
    component: React.ReactElement,
    shouldRender: boolean = isAuth,
    redirectPath: string = '/login'
  ) => shouldRender ? component : <Navigate to={redirectPath} />;

  return [
    {
      path: "/",
      element: RenderBasedOnAuth(<HomePage />),
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: RenderBasedOnAuth(<LoginPage />, !isAuth, '/'),
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
    {
      path: "/laboratory",
      element: RenderBasedOnAuth(<LaboratoryListPage />),
      errorElement: <ErrorPage />,
    },
    {
      path: "/laboratory/:laboratoryId",
      element: RenderBasedOnAuth(<LaboratoryDetailPage />),
      errorElement: <ErrorPage />,
    },
  ];

}


export default GeneralRoutes;



