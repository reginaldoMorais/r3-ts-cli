import IPerson from './IPerson';
import IVehicle from './IVehicle';
import Starship from './Starship';

interface IOwnProps {
  starship: IVehicle;
}

export type ICharacter = IOwnProps & IPerson;

class Character implements ICharacter {
  name: string;

  starship: IVehicle;

  constructor(name: string, starship: string) {
    const StarshipObj = new Starship(starship);

    this.name = name;
    this.starship = StarshipObj;
  }
}

export default Character;
