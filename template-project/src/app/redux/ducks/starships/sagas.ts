import { takeLatest, call, put } from 'redux-saga/effects';
import api from '../../utils/api';

import { StarshipTypes } from './types';
import { loadSuccess, loadFailure } from './actions';
import Action from '../types';

function* loadStarship(action: Action) {
  try {
    const response = yield call(api.get, `starships/${action.payload}`);
    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}

function* watchStarshipsLoadRequest() {
  yield takeLatest(StarshipTypes.LOAD_REQUEST, loadStarship);
}

export { watchStarshipsLoadRequest };
