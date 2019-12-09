export default (name: string) => {
  const component = name.charAt(0).toUpperCase() + name.slice(1);
  return `/**
 * ${component}
 */
`;
};
