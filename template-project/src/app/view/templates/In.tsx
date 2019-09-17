import React, { Component } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import ScrollToTop from '../components/scroll-to-top/ScrollToTop';
import Toastr from '../components/toastr/Toastr';
import Content from '../components/content/Content';
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
