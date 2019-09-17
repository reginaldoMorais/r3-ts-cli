import { Action as ReduxAction } from 'redux';

export interface IPayload {
  data: any;
};

export interface IAction extends ReduxAction {
  payload: IPayload;
};
