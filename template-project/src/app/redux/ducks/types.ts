import { Action as ReduxAction } from 'redux';

interface IPayload {
  data: any;
}

export default interface IAction extends ReduxAction {
  payload: IPayload;
}
