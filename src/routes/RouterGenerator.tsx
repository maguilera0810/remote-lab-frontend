// src/routes/RouterGenerator.tsx

import React, { useState, useEffect } from 'react';
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider
} from "react-router-dom";
import type { Router as RemixRouter } from "@remix-run/router";
import GeneralRoutes from './GeneralRoutes';
import { RouterGeneratorProps } from '../interfaces/GlobalInterfaces'


const RouterGenerator: React.FC<RouterGeneratorProps> = ({ routerType = 'general', user, token }) => {
  const [router, setRouter] = useState<RemixRouter>(createBrowserRouter(GeneralRoutes(user, token)))
  const createRouter = (): RemixRouter => {
    let routes: RouteObject[] = [];
    if (routerType === 'general') {
      routes = GeneralRoutes(user, token);
    }
    return createBrowserRouter(routes)
  }
  useEffect(() => {
    setRouter(createRouter());
  }, [user, token])

  return <RouterProvider router={router} />;
}

export default RouterGenerator;
