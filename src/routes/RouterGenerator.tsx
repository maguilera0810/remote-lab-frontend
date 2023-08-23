// src/routes/RouterGenerator.tsx

import React from 'react';
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider
} from "react-router-dom";
import GeneralRoutes from './GeneralRoutes';
import { RouterGeneratorProps } from '../interfaces/GlobalInterfaces'

const RouterGenerator: React.FC<RouterGeneratorProps> = ({ routerType = 'general', user, token }) => {
  let routes: RouteObject[] = [];
  if (routerType === 'general') {
    routes = GeneralRoutes(user, token);
  }  
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}

export default RouterGenerator;