"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (name) {
    var component = name.charAt(0).toUpperCase() + name.slice(1);
    return "export enum " + component + "Types {\n  'LOAD_REQUEST' = '@" + name + "/LOAD_REQUEST',\n  'LOAD_SUCCESS' = '@" + name + "/LOAD_SUCCESS',\n  'LOAD_FAILURE' = '@" + name + "/LOAD_FAILURE',\n  'CLEAR_DATA' = '@" + name + "/CLEAR_DATA',\n}\n\nexport interface I" + component + " {}\n\nexport interface I" + component + "State {\n  readonly data: I" + component + ";\n  readonly loading: boolean;\n  readonly error: boolean;\n}\n";
});
