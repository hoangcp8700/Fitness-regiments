import React, { useMemo } from 'react';
import { CONSTANT_ROUTE } from '@utils/constants';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Loading from '@components/atoms/Loading';

import { Category, Error, Home, LayoutApp } from './PageLazy';

const AppRouter = () => {
  const router = useMemo(
    () =>
      createBrowserRouter([
        {
          loader: () => null,
          children: [
            {
              element: <LayoutApp />,
              children: [
                {
                  path: CONSTANT_ROUTE.ROOT,
                  element: <Navigate to={CONSTANT_ROUTE.HOME} replace />,
                },
                {
                  path: CONSTANT_ROUTE.HOME,
                  element: <Home />,
                },
                {
                  path: CONSTANT_ROUTE.REGIMENTS,
                  element: <Home />,
                },
                {
                  path: CONSTANT_ROUTE.FORUMS,
                  element: <Home />,
                },
                {
                  path: CONSTANT_ROUTE.COLLECTIONS,
                  element: <Home />,
                },
                {
                  path: CONSTANT_ROUTE.CATEGORY,
                  element: <Category />,
                },
              ],
            },
            {
              element: <Error />,
              path: '*',
            },
          ],
        },
      ]),
    [],
  );
  return <RouterProvider router={router} fallbackElement={<Loading />} />;
};

export default AppRouter;
