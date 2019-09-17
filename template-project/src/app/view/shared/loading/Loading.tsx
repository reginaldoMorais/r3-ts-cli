import React from 'react';

import { IOwnProps } from './types';

export default ({ isLoading }: IOwnProps) => (isLoading ? (
  <div className="loading" data-loadingbar="">
    <div className="loading-spinner">
      <div className="spinner-icon" />
      <div className="background" />
    </div>
  </div>
) : null);
