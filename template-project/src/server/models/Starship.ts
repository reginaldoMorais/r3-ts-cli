import IVehicle from './IVehicle';

class Starship implements IVehicle {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

export default Starship;
