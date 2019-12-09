"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (name) {
    var component = name.charAt(0).toUpperCase() + name.slice(1);
    return "import { I" + component + ", I" + component + "State, " + component + "Types } from './types';\n\nimport { IAction } from '../types';\n\nconst DATA_INITIAL_STATE: I" + component + " = {};\n\nconst INITIAL_STATE: I" + component + "State = {\n  data: DATA_INITIAL_STATE,\n  error: false,\n  loading: false,\n};\n\nexport default (state: I" + component + "State = INITIAL_STATE, action: IAction) => {\n  switch (action.type) {\n    case " + component + "Types.LOAD_REQUEST:\n      return { ...state, loading: true };\n\n    case " + component + "Types.LOAD_SUCCESS:\n      return {\n        ...state,\n        loading: false,\n        error: false,\n        data: action.payload.data,\n      };\n\n    case " + component + "Types.LOAD_FAILURE:\n      return {\n        ...state,\n        loading: false,\n        error: true,\n        data: {},\n      };\n\n    case " + component + "Types.CLEAR_DATA:\n      return INITIAL_STATE;\n\n    default:\n      return state;\n  }\n};\n";
});
