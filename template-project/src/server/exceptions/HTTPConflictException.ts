import Exception from './Exception';

export default class HTTPConflictException extends Exception {
  constructor(err: string = 'HTTP Conflict') {
    super('HTTPConflictException', err);
  }
}
