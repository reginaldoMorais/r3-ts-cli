import { ICharacterState } from '../ducks/characters/types';
import { IStarshipState } from '../ducks/starships/types';
import { ILocateState } from '../ducks/locate/types';

export interface IApplicationState {
  character: ICharacterState;
  starship: IStarshipState;
  locate: ILocateState;
}
