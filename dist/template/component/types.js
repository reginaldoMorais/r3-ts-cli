"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (name) {
    var component = name.charAt(0).toUpperCase() + name.slice(1);
    return "import { I" + component + "State } from '../../../redux/ducks/" + name + "/types';\n\nexport interface IStateProps {}\n\nexport interface IDispatchProps {}\n\nexport interface IOwnProps {}\n\n";
});
