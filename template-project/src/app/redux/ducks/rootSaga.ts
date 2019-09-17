import { all } from 'redux-saga/effects';

import { watchCharactersLoadRequest } from './characters/sagas';
import { watchStarshipsLoadRequest } from './starships/sagas';
import { watchLocateChange } from './locate/sagas';

export default function* rootSaga() {
  return yield all([
    watchCharactersLoadRequest(),
    watchStarshipsLoadRequest(),
    watchLocateChange(),
  ]);
}
