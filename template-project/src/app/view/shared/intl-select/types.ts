import { ILocateState } from 'app/redux/ducks/locate/types';

export interface IStateProps {
  locate: ILocateState;
}

export interface IDispatchProps {
  locateChange(id: string): void;
}

export interface IOwnProps { }
