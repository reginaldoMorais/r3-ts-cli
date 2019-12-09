export default (name: string) => {
  const component = name.charAt(0).toUpperCase() + name.slice(1);
  return `export enum ${component}Types {
  'LOAD_REQUEST' = '@${name}/LOAD_REQUEST',
  'LOAD_SUCCESS' = '@${name}/LOAD_SUCCESS',
  'LOAD_FAILURE' = '@${name}/LOAD_FAILURE',
  'CLEAR_DATA' = '@${name}/CLEAR_DATA',
}

export interface I${component} {}

export interface I${component}State {
  readonly data: I${component};
  readonly loading: boolean;
  readonly error: boolean;
}
`;
};
