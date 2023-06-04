import { lazy } from 'react';

export const Home = lazy(() => import('@pages/Home'));
export const Category = lazy(() => import('@pages/Category'));
export const Error = lazy(() => import('@pages/Error'));

export const LayoutDefault = lazy(() => import('@components/common/Layout/LayoutDefault'));
export const LayoutApp = lazy(() => import('@components/common/Layout/LayoutApp'));
