export enum CharacterTypes {
  'LOAD_REQUEST' = '@characters/LOAD_REQUEST',
  'LOAD_SUCCESS' = '@characters/LOAD_SUCCESS',
  'LOAD_FAILURE' = '@characters/LOAD_FAILURE',
  'CLEAR_DATA' = '@characters/CLEAR_DATA',
}

export interface ICharacter {
  id: number;
  name: string;
  gender: string;
  homeworld: string;
  url: string;
}

export interface ICharacterState {
  readonly data: ICharacter;
  readonly loading: boolean;
  readonly error: boolean;
}
