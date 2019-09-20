export default (name: string) => {
  const component = name.charAt(0).toUpperCase() + name.slice(1);
  return `import { I${component}, I${component}State, ${component}Types } from './types';

import { IAction } from '../types';

const DATA_INITIAL_STATE: I${component} = {};

const INITIAL_STATE: I${component}State = {
  data: DATA_INITIAL_STATE,
  error: false,
  loading: false,
};

export default (state: I${component}State = INITIAL_STATE, action: IAction) => {
  switch (action.type) {
    case ${component}Types.LOAD_REQUEST:
      return { ...state, loading: true };

    case ${component}Types.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };

    case ${component}Types.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: {},
      };

    case ${component}Types.CLEAR_DATA:
      return INITIAL_STATE;

    default:
      return state;
  }
};

`;
};
