import React from 'react';
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider
} from "react-router-dom";
import generalRoutes from './GeneralRoutes';
import { RouterGeneratorProps } from '../interfaces/GlobalInterfaces'

const RouterGenerator: React.FC<RouterGeneratorProps> = ({ routerType = 'general' }) => {
  let routes: RouteObject[] = [];
  if (routerType === 'general') {
    routes = generalRoutes;
  }
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}

export default RouterGenerator;