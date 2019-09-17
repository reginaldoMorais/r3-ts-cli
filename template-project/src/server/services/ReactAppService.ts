import { Request } from 'express';
import axios from 'axios';
import Exception from '../exceptions/Exception';
import config from '../../config';

export default class ReactAppService {
  async createInitialState(req: Request) {
    const service = new ReactAppService();
    let initalState = {};

    try {
      if (req.path == `/in/character/${req.params.id}`) {
        initalState = { ...initalState, character: await this.getCharacter(req.params.id) };
      } else if (req.path == `/` || req.path == `/in/character`) {
        initalState = { ...initalState, character: await this.getCharacter() };
      }
    } catch (err) {
      new Exception(undefined, `ReactAppService.createInitialState ${err}`);
    }

    return initalState;
  }

  async getCharacter(id: string = '1') {
    const response = await axios.get(`${config.apis.swapi.url}people/${id}`);
    return { data: response.data, loading: false, error: false };
  }
}
