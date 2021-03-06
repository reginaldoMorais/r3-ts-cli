import React, { Component } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import ScrollToTop from '../shared/scroll-to-top/ScrollToTop';
import Toastr from '../shared/toastr/Toastr';
import Content from '../shared/content/Content';

/* Routes */
import PageNotFound from '../pages/page-not-found/PageNotFound';

class In extends Component {
  render() {
    return (
      <Content>
        <Switch>
          <Redirect exact from="/in/*" to="/" />
          <Route key="index-not-found" path="/*" component={PageNotFound} exact />
        </Switch>
        <ScrollToTop />
        <Toastr />
      </Content>
    );
  }
}

export default In;
