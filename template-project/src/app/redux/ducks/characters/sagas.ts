import { takeLatest, call, put } from 'redux-saga/effects';
import api from '../../utils/api';

import { CharacterTypes } from './types';
import { loadSuccess, loadFailure } from './actions';
import Action from '../types';

function* loadCharacter(action: Action) {
  try {
    const response = yield call(api.get, `people/${action.payload}`);
    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}

function* watchCharactersLoadRequest() {
  yield takeLatest(CharacterTypes.LOAD_REQUEST, loadCharacter);
}

export { watchCharactersLoadRequest };
