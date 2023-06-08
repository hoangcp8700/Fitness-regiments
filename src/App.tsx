import React, { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import AppRouter from '@routes';
import './styles/index.css';
import ConfigAntd from '@configs/Antd';
import DarkModeProvider from '@context/DarkModeContext';

// ------------------------------------------

const App = () => (
  <Suspense>
    <AppRouter />
  </Suspense>
);

const AppWrapper: React.FC = () => (
  <HelmetProvider>
    <DarkModeProvider>
      <ConfigAntd>
        <App />
      </ConfigAntd>
    </DarkModeProvider>
  </HelmetProvider>
);

export default AppWrapper;
