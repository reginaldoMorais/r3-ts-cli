import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { IApplicationState } from '../../../redux/store/types';
import LocateActions from '../../../redux/ducks/locate/actions';
import IntlSelect from './IntlSelect';
import { IStateProps, IDispatchProps, IOwnProps } from './types';

const mapStateToProps: MapStateToProps<IStateProps, IOwnProps, IApplicationState> = ({
  locate
}: IApplicationState) => ({
  locate
});

const mapDispatchToProps: MapDispatchToProps<IDispatchProps, IOwnProps> = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      locateChange: LocateActions.locateChange
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IntlSelect);
