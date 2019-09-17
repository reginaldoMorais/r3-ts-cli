import sinon from 'sinon';
import { getConfig } from '../index';

describe(`Config`, () => {
  let sandbox = sinon.createSandbox();

  it(`Should return Development variables if NODE_ENV is 'development'`, () => {
    expect(getConfig('development').env).toEqual('development');
  });

  it(`Should return Staging variables if NODE_ENV is 'staging'`, () => {
    expect(getConfig('staging').env).toEqual('staging');
  });

  it(`Should return Production variables if NODE_ENV is 'production'`, () => {
    expect(getConfig('production').env).toEqual('production');
  });
})
