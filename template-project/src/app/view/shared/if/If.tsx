import React, { Component } from 'react';

import { IOwnProps } from './types';

class If extends Component<IOwnProps> {
  render() {
    const { test, children, component } = this.props;
    if (test) {
      return children;
    }
    return component || false;
  }
};

export default If;
