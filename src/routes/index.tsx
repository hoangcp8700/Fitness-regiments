import { useMemo } from 'react';
import { CONSTANT_ROUTE } from '@utils/constants';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Loading from '@components/atoms/Loading';

import { Category, Collections, Error, Forums, Home, LayoutApp, Regiments } from './PageLazy';

const AppRouter = () => {
  const router = useMemo(
    () =>
      createBrowserRouter([
        {
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
                  element: <Regiments />,
                },
                {
                  path: CONSTANT_ROUTE.FORUMS,
                  element: <Forums />,
                },
                {
                  path: CONSTANT_ROUTE.COLLECTIONS,
                  element: <Collections />,
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
