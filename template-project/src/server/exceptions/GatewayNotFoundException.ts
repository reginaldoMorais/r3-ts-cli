import Exception from './Exception';

export default class GatewayNotFoundException extends Exception {
  constructor(err: string = 'Gateway Not Found') {
    super('GatewayNotFoundException', err);
  }
}
