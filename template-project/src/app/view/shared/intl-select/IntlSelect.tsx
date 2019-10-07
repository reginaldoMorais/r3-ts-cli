import React, { Component } from 'react';

import { SelectStyled, UlStyled, LiStyled, LinkActiveStyled } from './IntlSelectStyle';
import { ILocate } from 'app/redux/ducks/locate/types';
import { IStateProps, IDispatchProps } from './types';
import IntlMessages from '../Intl-messages/IntlMessages';

type IProps = IStateProps & IDispatchProps;

class IntlSelect extends Component<IProps> {
  handleClick(id: string) {
    const { locateChange } = this.props;
    locateChange(id);
  }

  renderLink(l: ILocate) {
    const { locate } = this.props;
    if (locate.data.id === l.id)
      return <LinkActiveStyled onClick={() => this.handleClick(l.id)}>{l.label}</LinkActiveStyled>;
    else return <a onClick={() => this.handleClick(l.id)}>{l.label}</a>;
  }

  renderOptions() {
    const locates: Array<ILocate> = [
      {
        id: 'en',
        label: 'en'
      },
      {
        id: 'es',
        label: 'es'
      },
      {
        id: 'fr',
        label: 'fr'
      },
      {
        id: 'pt-BR',
        label: 'pt-BR'
      }
    ];

    return locates.map((l, i) => <LiStyled key={i}>{this.renderLink(l)}</LiStyled>);
  }

  render() {
    return (
      <SelectStyled className="app-languages">
        <h4>
          <IntlMessages id="locate.language" />:
        </h4>
        <UlStyled>{this.renderOptions()}</UlStyled>
      </SelectStyled>
    );
  }
}

export default IntlSelect;
