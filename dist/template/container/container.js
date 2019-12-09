"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (name) {
    var component = name.charAt(0).toUpperCase() + name.slice(1);
    return "import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';\nimport { bindActionCreators, Dispatch } from 'redux';\n\nimport { IApplicationState } from '../../../redux/store/types';\nimport { IStateProps, IDispatchProps, IOwnProps } from './types';\n\nimport " + component + " from './" + component + "';\n\nconst mapStateToProps: MapStateToProps<IStateProps, IOwnProps, IApplicationState> = ({}: IApplicationState) => ({});\n\nconst mapDispatchToProps: MapDispatchToProps<IDispatchProps, IOwnProps> = (dispatch: Dispatch) =>\n  bindActionCreators({}, dispatch);\n\nexport default connect(mapStateToProps, mapDispatchToProps)(" + component + ");\n";
});
