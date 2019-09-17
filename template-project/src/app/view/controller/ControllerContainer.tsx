import { connect, MapStateToProps } from 'react-redux';

import { IApplicationState } from '../../redux/store/types';
import { IStateProps, IOwnProps } from './types';
import Controller from './Controller';

const mapStateToProps: MapStateToProps<IStateProps, IOwnProps, IApplicationState> = ({ locate }: IApplicationState) => ({
  locate
});

export default connect(mapStateToProps)(Controller);
