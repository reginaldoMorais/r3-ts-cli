"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (name) {
    var component = name.charAt(0).toUpperCase() + name.slice(1);
    return "import { action } from 'typesafe-actions';\nimport { I" + component + ", " + component + "Types } from './types';\n\nexport const loadRequest = (id: string) => action(" + component + "Types.LOAD_REQUEST, id);\n\nexport const loadSuccess = (data: I" + component + ") => action(" + component + "Types.LOAD_SUCCESS, { data });\n\nexport const loadFailure = () => action(" + component + "Types.LOAD_FAILURE);\n\nexport const clearData = () => action(" + component + "Types.CLEAR_DATA);\n\nexport default {\n  loadRequest, loadSuccess, loadFailure, clearData,\n};\n";
});
