import React from 'react';

import { Content } from './ContentStyle';
import { IOwnProps } from './types';

export default ({ fluid = false, className = '', children }: IOwnProps) => (
  <Content fluid={fluid} className={`content ${className} ${fluid && 'content-fluid'}`}>
    {children}
  </Content>
);
