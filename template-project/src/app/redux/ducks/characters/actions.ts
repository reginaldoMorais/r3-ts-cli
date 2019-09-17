import { action } from 'typesafe-actions';
import { ICharacter, CharacterTypes } from './types';

export const loadRequest = (id: string) => action(CharacterTypes.LOAD_REQUEST, id);

export const loadSuccess = (data: ICharacter) => action(CharacterTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => action(CharacterTypes.LOAD_FAILURE);

export const clearData = () => action(CharacterTypes.CLEAR_DATA);

export default {
  loadRequest, loadSuccess, loadFailure, clearData,
};
