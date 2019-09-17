import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import React, { Component } from 'react';

import ReduxToastr, { toastr } from 'react-redux-toastr';
import { IOwnProps } from './types';

class Toastr extends Component<IOwnProps> {
  componentDidMount() {
    this.dispatch();
  }

  dispatch() {
    const { title = '', message, type } = this.props;
    if (message != undefined) {
      switch (type) {
        case 'info': {
          toastr.info(title, message);
          break;
        }

        case 'success': {
          toastr.success(title, message);
          break;
        }

        case 'warning': {
          toastr.warning(title, message);
          break;
        }

        case 'error': {
          toastr.error(title, message);
          break;
        }

        default: {
          toastr.info(title, message);
          break;
        }
      }
    }
  }

  render() {
    return (
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates={true}
        position="top-right"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
      />
    );
  }
}

export default Toastr;
