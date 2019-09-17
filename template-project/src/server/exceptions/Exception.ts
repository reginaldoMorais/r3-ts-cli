const { red } = require('colors/safe');

export default class Exception {
  constructor(type: string = 'Exception', err: string = '') {
    console.error(red(`${type}: ${err}`));
  }
}
