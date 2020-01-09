export default (name: string) => {
  const component = name.charAt(0).toUpperCase() + name.slice(1);
  return `import { takeLatest, call, put } from 'redux-saga/effects';
import api from '../../utils/api';

import { ${component}Types } from './types';
import { loadSuccess, loadFailure } from './actions';
import IAction from '../types';

function* load${component}(action: IAction) {
  try {
    yield put(loadSuccess({}));
  } catch (err) {
    yield put(loadFailure());
  }
}

function* watch${component}LoadRequest() {
  yield takeLatest(${component}Types.LOAD_REQUEST, load${component});
}

export { watch${component}LoadRequest };
`;
};
