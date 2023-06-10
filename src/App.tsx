import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import AppRouter from '@routes';
import './styles/index.css';
import ConfigAntd from '@configs/Antd';
import DarkModeProvider from '@context/DarkModeContext';
import { BrowserRouter } from 'react-router-dom';

// ------------------------------------------

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
