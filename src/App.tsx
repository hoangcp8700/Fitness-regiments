import React, { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import AppRouter from '@routes';
import Loading from '@components/atoms/Loading';
import './styles/index.css';
import ConfigAntd from '@configs/Antd';

// ------------------------------------------

const App = () => (
  <Suspense fallback={<Loading />}>
    <AppRouter />
  </Suspense>
);

const AppWrapper: React.FC = () => (
  <HelmetProvider>
    <ConfigAntd>
      <App />
    </ConfigAntd>
  </HelmetProvider>
);

export default AppWrapper;
