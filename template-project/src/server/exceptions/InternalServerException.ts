import Exception from './Exception';

export default class InternalServerException extends Exception {
  constructor(err: string = 'Internal Server Error') {
    super('InternalServerException', err);
  }
}
