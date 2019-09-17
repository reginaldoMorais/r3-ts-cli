import Exception from './Exception';

export default class NotFoundException extends Exception {
  constructor(err: string = 'Not found') {
    super('NotFoundException', err);
  }
}
