import React, { Component } from 'react';

import { Container, Row, Col } from '@bootstrap-styled/v4';
import { HomeStyled, IntlSelectStyled } from './HomeStyle';
import { IStateProps, IDispatchProps } from './types';
import CharacterModel from '../../../../server/models/Character';
import { PermissionRender } from 'r2-access-permission';
import Loading from '../../shared/loading/Loading';
import AppInfo from '../../shared/app-info/AppInfo';
import Character from '../../shared/character/Character';
import Salutation from '../../shared/salutation/Salutation';
import IntlSelect from '../../shared/intl-select/IntlSelectContainer';

type IProps = IStateProps & IDispatchProps;

class Home extends Component<IProps> {
  componentDidMount() {
    const { loadCharacter, loadStarships } = this.props;
    // TODO - Receive param from URL
    loadCharacter('1');
    loadStarships('12');
  }

  componentWillUnmount() {
    const { clearCharacterData, clearStarshipsData } = this.props;
    clearCharacterData();
    clearStarshipsData();
  }

  render() {
    const { character, starship, locate } = this.props;
    const characterModel = new CharacterModel(character.data.name, starship.data.name);

    return (
      <HomeStyled>
        <AppInfo />
        <Container>
          <Row>
            <Col xs={12}>
              <Character character={characterModel} />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <PermissionRender authorities={['ROLE_FOO']} authority="ROLE_FOO">
                <Salutation />
              </PermissionRender>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <IntlSelectStyled>
                <IntlSelect />
              </IntlSelectStyled>
            </Col>
          </Row>
          <Loading isLoading={character.loading} />
          <Loading isLoading={starship.loading} />
          <Loading isLoading={locate.loading} />
        </Container>
      </HomeStyled>
    );
  }
}

export default Home;
