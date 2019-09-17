import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';
import ScrollToTop from '../components/scroll-to-top/ScrollToTop';
import OutStyle from '../components/OutGlobalStyle';
import { ContentStyled } from './OutStyle';
import Toastr from '../components/toastr/Toastr';
import Home from '../pages/home/HomeContainer';
import PageNotFound from '../pages/page-not-found/PageNotFound';

class Out extends Component {
  render() {
    return (
      <>
        <OutStyle />
        <ContentStyled fluid>
          <Switch>
            <Route key="home" path="/" component={Home} exact />
            <Route key="index-not-found" path="/*" component={PageNotFound} exact />
          </Switch>
          <ScrollToTop />
          <Toastr />
        </ContentStyled>
      </>
    );
  }
}

export default Out;
