import { ICharacterState } from '../../../redux/ducks/characters/types';
import { IStarshipState } from '../../../redux/ducks/starships/types';
import { ILocateState } from '../../../redux/ducks/locate/types';

export interface IStateProps {
  character: ICharacterState;
  starship: IStarshipState;
  locate: ILocateState;
}

export interface IDispatchProps {
  loadCharacter(id: string): void;
  loadStarships(id: string): void;
  clearCharacterData(): void;
  clearStarshipsData(): void;
}

export interface IOwnProps {}
