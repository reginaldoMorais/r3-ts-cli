"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (name) {
    var component = name.charAt(0).toUpperCase() + name.slice(1);
    return "import { takeLatest, call, put } from 'redux-saga/effects';\nimport api from '../../utils/api';\n\nimport { " + component + "Types } from './types';\nimport { loadSuccess, loadFailure } from './actions';\nimport { IAction } from '../types';\n\nfunction* load" + component + "(action: IAction) {\n  try {\n    yield put(loadSuccess({}));\n  } catch (err) {\n    yield put(loadFailure());\n  }\n}\n\nfunction* watch" + component + "LoadRequest() {\n  yield takeLatest(" + component + "Types.LOAD_REQUEST, load" + component + ");\n}\n\nexport { watch" + component + "LoadRequest };\n";
});
