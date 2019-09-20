export default (name: string) => {
  const component = name.charAt(0).toUpperCase() + name.slice(1);
  return `import { takeLatest, call, put } from 'redux-saga/effects';
import api from '../../utils/api';

import { ${component}Types } from './types';
import { loadSuccess, loadFailure } from './actions';
import Action from '../types';

function* load${component}(action: Action) {
  try {
    yield put(loadSuccess({}));
  } catch (err) {
    yield put(loadFailure());
  }
}

function* watch${component}sLoadRequest() {
  yield takeLatest(${component}Types.LOAD_REQUEST, load${component});
}

export { watch${component}sLoadRequest };

`;
};
