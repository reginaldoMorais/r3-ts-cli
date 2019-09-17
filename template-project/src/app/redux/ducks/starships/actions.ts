import { action } from 'typesafe-actions';
import { IStarship, StarshipTypes } from './types';

export const loadRequest = (id: string) => action(StarshipTypes.LOAD_REQUEST, id);

export const loadSuccess = (data: IStarship) => action(StarshipTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => action(StarshipTypes.LOAD_FAILURE);

export const clearData = () => action(StarshipTypes.CLEAR_DATA);

export default { loadRequest, loadSuccess, loadFailure, clearData };