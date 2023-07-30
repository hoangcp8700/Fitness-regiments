import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import AppRouter from '@routes';
import './styles/index.css';
import DarkModeProvider from '@context/DarkModeContext';
import { BrowserRouter } from 'react-router-dom';
import './shared/styles/index.scss';
import ConfigAntd from '@libs/Antd';

// ----------------------------------`--------

const App = () => <AppRouter />;

const AppWrapper: React.FC = () => (
  <HelmetProvider>
    <BrowserRouter>
      <DarkModeProvider>
        <ConfigAntd>
          <App />
        </ConfigAntd>
      </DarkModeProvider>
    </BrowserRouter>
  </HelmetProvider>
);

export default AppWrapper;
