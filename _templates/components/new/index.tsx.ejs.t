---
to: src/components/<%= level %>/<%= h.inflection.camelize(name) %>/index.tsx
---
import React from 'react';

interface <%= h.inflection.camelize(name) %>Props {
  children?: React.ReactNode;
}

const <%= h.inflection.camelize(name) %>: React.FC<<%= h.inflection.camelize(name) %>Props> = () => <div>Component <%= h.inflection.camelize(name) %></div>;

export default <%= h.inflection.camelize(name) %>;
