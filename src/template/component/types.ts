export default (name: string) => {
  const component = name.charAt(0).toUpperCase() + name.slice(1);
  return `import { I${component}State } from '../../../redux/ducks/${name}/types';

export interface IStateProps {}

export interface IDispatchProps {}

export interface IOwnProps {}
`;
};
