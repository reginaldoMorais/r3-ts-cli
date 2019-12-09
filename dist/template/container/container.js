"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (name) {
    var component = name.charAt(0).toUpperCase() + name.slice(1);
    return "import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';\nimport { bindActionCreators, Dispatch } from 'redux';\n\nimport { IApplicationState } from '../../../redux/store/types';\nimport { IStateProps, IDispatchProps, IOwnProps } from './types';\n\nimport " + component + "Actions from '../../../redux/ducks/" + name + "/actions';\nimport " + component + " from './" + component + "';\n\nconst mapStateToProps: MapStateToProps<IStateProps, IOwnProps, IApplicationState> = ({ " + name + " }: IApplicationState) => ({ " + name + " });\n\nconst mapDispatchToProps: MapDispatchToProps<IDispatchProps, IOwnProps> = (dispatch: Dispatch) =>\n  bindActionCreators(\n    {\n      loadRequest: " + component + "Actions.loadRequest,\n    },\n    dispatch\n  );\n\nexport default connect(\n  mapStateToProps,\n  mapDispatchToProps\n)(" + component + ");\n\n";
});
