export enum StarshipTypes {
  'LOAD_REQUEST' = '@starships/LOAD_REQUEST',
  'LOAD_SUCCESS' = '@starships/LOAD_SUCCESS',
  'LOAD_FAILURE' = '@starships/LOAD_FAILURE',
  'CLEAR_DATA' = '@starships/CLEAR_DATA',
}

export interface IStarship {
  id: number;
  name: string;
}

export interface IStarshipState {
  readonly data: IStarship;
  readonly loading: boolean;
  readonly error: boolean;
}
