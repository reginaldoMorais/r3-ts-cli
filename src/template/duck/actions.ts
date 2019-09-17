export default (name: string) => {
  return `export const action = () => {
  return { type: '${name.toUpperCase()}_ACTION' };
};
`;
};
