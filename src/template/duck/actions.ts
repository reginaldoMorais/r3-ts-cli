export default (name: string) => {
  const component = name.charAt(0).toUpperCase() + name.slice(1);
  return `import { action } from 'typesafe-actions';
import { I${component}, ${component}Types } from './types';

export const loadRequest = (id: string) => action(${component}Types.LOAD_REQUEST, id);

export const loadSuccess = (data: I${component}) => action(${component}Types.LOAD_SUCCESS, { data });

export const loadFailure = () => action(${component}Types.LOAD_FAILURE);

export const clearData = () => action(${component}Types.CLEAR_DATA);

export default {
  loadRequest, loadSuccess, loadFailure, clearData,
};

`;
};
