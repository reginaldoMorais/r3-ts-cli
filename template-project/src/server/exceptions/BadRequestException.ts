import Exception from './Exception';

export default class BadRequestException extends Exception {
  constructor(err: string = 'Bad Request') {
    super('BadRequestException', err);
  }
}
