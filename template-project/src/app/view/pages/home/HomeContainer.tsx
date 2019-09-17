import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { IApplicationState } from '../../../redux/store/types';
import CharacterActions from '../../../redux/ducks/characters/actions';
import StarshipActions from '../../../redux/ducks/starships/actions';
import Home from './Home';
import { IStateProps, IDispatchProps, IOwnProps } from './types';

const mapStateToProps: MapStateToProps<IStateProps, IOwnProps, IApplicationState> = ({
  character,
  starship,
  locate
}: IApplicationState) => ({
  character,
  starship,
  locate
});

const mapDispatchToProps: MapDispatchToProps<IDispatchProps, IOwnProps> = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      loadCharacter: CharacterActions.loadRequest,
      clearCharacterData: CharacterActions.clearData,
      loadStarships: StarshipActions.loadRequest,
      clearStarshipsData: StarshipActions.clearData
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
