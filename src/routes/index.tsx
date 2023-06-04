import React, { useMemo } from 'react';
import { CONSTANT_ROUTE } from '@utils/constants';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
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
