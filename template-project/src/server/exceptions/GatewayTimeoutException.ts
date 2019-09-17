import Exception from './Exception';

export default class GatewayTimeoutException extends Exception {
  constructor(err: string = 'Gateway Timeout') {
    super('GatewayTimeoutException', err);
  }
}
