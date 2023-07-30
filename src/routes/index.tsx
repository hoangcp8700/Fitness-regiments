import { Suspense } from 'react';
import { ELinks } from '@shared/constants';
import { useRoutes } from 'react-router-dom';
import { CONSTANT_ROUTE, CONSTANT_ROUTE } from '@utils/constants/routes';

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
              element: <LayoutDefault />,
              children: [
                {
                  path: ELinks.ROOT,
                  element: <Home />,
                },
                {
                  path: ELinks.CATEGORY,
                  element: <Category />,
                },
              ],
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
