import React, { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import AppRouter from '@routes';
import Loading from '@components/atoms/Loading';
import './styles/index.scss';

// ------------------------------------------

const App = () => (
  <Suspense fallback={<Loading />}>
    <AppRouter />
  </Suspense>
);

const AppWrapper: React.FC = () => (
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

export default AppWrapper;
