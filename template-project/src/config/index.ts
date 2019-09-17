export const getConfig = (enviroment?: string) => {
  const env = enviroment || process.env.NODE_ENV;
  switch (env) {
    case 'production':
      return require('./env.production.json');

    case 'staging':
      return require('./env.staging.json');

    default:
      return require('./env.default.json');
  }
};

export default getConfig();
