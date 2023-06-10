import { CONSTANT_ROUTE } from '@utils/constants';
import { Navigate, useRoutes } from 'react-router-dom';
import { Suspense } from 'react';

import { Category, Collections, Error, Forums, Home, LayoutApp, LayoutDefault, Regiments } from './PageLazy';

const LayoutMain = () => (
  <LayoutApp>
    <LayoutDefault />
  </LayoutApp>
);

const AppRouter = () => {
  const router = useRoutes([
    {
      children: [
        {
          element: <LayoutMain />,
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
  ]);

  return <Suspense fallback={<LayoutMain />}>{router}</Suspense>;
};

export default AppRouter;
