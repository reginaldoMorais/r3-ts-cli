import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { IApplicationState } from '../../../redux/store/types';
import LocateActions from '../../../redux/ducks/locate/actions';
import IntlSelect from './IntlSelect';

const mapStateToProps = ({ locate }: IApplicationState) => ({
  locate
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    locateChange: LocateActions.locateChange,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(IntlSelect);
