import { action } from 'typesafe-actions';
import { LocateTypes, ILocate } from './types';
import { Locates } from '../../../lang';

export const locateChange = (id: string) => {
  return {
    type: LocateTypes.LOCATE_CHANGE,
    payload: id,
  }
};

export const locateChanging = (id: string) => {
  switch (id) {
    case Locates.ES: return { id: 'es', label: 'es' };
    case Locates.FR: return { id: 'fr', label: 'fr' };
    case Locates.BR: return { id: 'br', label: 'pt-BR' };
    default: return { id: 'en', label: 'en' };
  }
};

export const locateChangeSuccess = (data: ILocate) => action(LocateTypes.LOCATE_CHANGE_SUCCESS, { data });

export const locateChangeFailure = () => action(LocateTypes.LOCATE_CHANGE_FAILURE);

export const clearLocate = () => action(LocateTypes.CLEAR_LOCATE);

export default { locateChange, locateChanging, locateChangeSuccess, locateChangeFailure, clearLocate };
