export enum LocateTypes {
  'LOCATE_CHANGE' = '@locate/LOCATE_CHANGE',
  'LOCATE_CHANGE_SUCCESS' = '@locate/LOCATE_CHANGE_SUCCESS',
  'LOCATE_CHANGE_FAILURE' = '@locate/LOCATE_CHANGE_FAILURE',
  'CLEAR_LOCATE' = '@locate/CLEAR_LOCATE',
}

export interface ILocate {
  id: string;
  label: string;
}

export interface ILocate {
  id: string;
  label: string;
}

export interface ILocateState {
  readonly data: ILocate;
  readonly loading: boolean;
  readonly error: boolean;
}
