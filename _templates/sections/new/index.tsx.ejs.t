---
to: src/sections/<%= h.inflection.camelize(name) %>/index.tsx
---
import React from 'react';

interface <%= h.inflection.camelize(name) %>ContainerProps {
  children?: React.ReactNode;
}

const <%= h.inflection.camelize(name) %>Container: React.FC<<%= h.inflection.camelize(name) %>ContainerProps> = () => <div>Container <%= h.inflection.camelize(name) %></div>;

export default <%= h.inflection.camelize(name) %>Container;
