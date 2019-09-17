import Exception from './Exception';

export default class UnauthorizedException extends Exception {
  constructor(err: string = 'Unauthorized') {
    super('UnauthorizedException', err);
  }
}
