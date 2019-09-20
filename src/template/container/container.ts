export default (name: string) => {
  const component = name.charAt(0).toUpperCase() + name.slice(1);
  return `import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { IApplicationState } from '../../../redux/store/types';
import { IStateProps, IDispatchProps, IOwnProps } from './types';

import ${component}Actions from '../../../redux/ducks/${name}/actions';
import ${component} from './${component}';

const mapStateToProps: MapStateToProps<IStateProps, IOwnProps, IApplicationState> = ({  Character}: IApplicationState) => ({});

const mapDispatchToProps: MapDispatchToProps<IDispatchProps, IOwnProps> = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      loadCharacter: ${component}Actions.loadRequest,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(${component});

`;
};
