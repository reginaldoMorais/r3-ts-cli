import React, { Component } from 'react';

import config from '../../../../config';
import { InfoStyled, ImageStyled, TextBoldStyled } from './AppInfoStyle';
import IntlMessages from '../Intl-messages/IntlMessages';

class AppInfo extends Component {
  renderMode(env: string) {
    switch (env) {
      case 'staging': {
        return <IntlMessages id="app-info.stg-mode" />;
      }

      case 'staging': {
        return <IntlMessages id="app-info.prod-mode" />;
      }

      default: {
        return <IntlMessages id="app-info.dev-mode" />;
      }
    }
  }

  render() {
    return (
      <InfoStyled>
        <ImageStyled src="../../../assets/images/r3-ts-logo.png" />
        <div>
          <div><IntlMessages id="app-info.application-running" /></div>
          <TextBoldStyled className="app-endpoint"><IntlMessages id="app-info.on" /> {`${config.basePath}:${config.port}`}</TextBoldStyled>
          <TextBoldStyled className="app-env"><IntlMessages id="app-info.in" /> {this.renderMode(config.env)}</TextBoldStyled>
        </div>
      </InfoStyled>
    );
  }
}

export default AppInfo;
