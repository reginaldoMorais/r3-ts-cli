import '../../assets/styles/scss/main.scss';
import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import BootstrapProvider from '@bootstrap-styled/provider';
import GlobalStyle from '../shared/GlobalStyle';
import { IStateProps, IDispatchProps, IOwnProps } from './types';
import Lang, { Locates } from '../../lang';
import In from '../templates/In';
import Out from '../templates/Out';

type IProps = IStateProps & IDispatchProps & IOwnProps;

class Controller extends Component<IProps> {
  getLocate() {
    const { locate } = this.props;
    var userLang = navigator.language || navigator.userLanguage;
    alert('The language is: ' + userLang);
    switch (locate.data.id) {
      case 'en':
        return Locates.EN;
      case 'es':
        return Locates.ES;
      case 'fr':
        return Locates.FR;
      case 'pt-BR':
        return Locates.BR;
      default:
        return Locates.EN;
    }
  }

  render() {
    const currentLang = Lang[this.getLocate()];

    return (
      <IntlProvider locale={currentLang.locale} messages={currentLang.messages}>
        <BootstrapProvider reset injectGlobal theme={{ '$body-bg': 'transparent' }}>
          <GlobalStyle />
          <Switch>
            <Route path="/in/*" component={In} exact />
            <Route path="*" component={Out} exact />
          </Switch>
        </BootstrapProvider>
      </IntlProvider>
    );
  }
}

export default Controller;
