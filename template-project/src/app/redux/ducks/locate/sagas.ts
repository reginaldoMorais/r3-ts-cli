import { takeLatest, put } from 'redux-saga/effects';

import { LocateTypes, ILocate } from './types';
import LocateActions from './actions';
import Action from '../types';

function* intlChange(action: Action) {
  try {
    const id: any = action.payload;
    const intl: ILocate = LocateActions.locateChanging(id);
    yield put(LocateActions.locateChangeSuccess(intl));
  } catch (err) {
    yield put(LocateActions.locateChangeFailure());
  }
}

function* watchLocateChange() {
  yield takeLatest(LocateTypes.LOCATE_CHANGE, intlChange);
}

export { watchLocateChange };
