import configTheme from '@shared/styles/theme';
import { ConfigProvider } from 'antd';
import React from 'react';

interface ConfigAntdProps {
  children: React.ReactNode;
}
const ConfigAntd: React.FC<ConfigAntdProps> = ({ children }) => (
  <ConfigProvider
    theme={configTheme.themConfig}
    getPopupContainer={(node) => {
      if (node && node.parentNode) return node.parentNode as HTMLElement;
      return document.body;
    }}
  >
    {children}
  </ConfigProvider>
);
export default ConfigAntd;
