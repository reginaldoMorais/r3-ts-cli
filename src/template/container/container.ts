export default (name: string) => {
  const component = name.charAt(0).toUpperCase() + name.slice(1);
  return `import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { IApplicationState } from '../../../redux/store/types';
import { IStateProps, IDispatchProps, IOwnProps } from './types';

import ${component} from './${component}';

const mapStateToProps: MapStateToProps<IStateProps, IOwnProps, IApplicationState> = ({}: IApplicationState) => ({});

const mapDispatchToProps: MapDispatchToProps<IDispatchProps, IOwnProps> = (dispatch: Dispatch) =>
  bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(${component});
`;
};
