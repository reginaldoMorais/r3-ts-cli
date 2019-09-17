const colors = require('colors/safe');

const commands = `${colors.cyan('========================')
    + colors.cyan('\n  :: NEW-STRUCTURE ::\n')
    + colors.cyan('========================\n\n')}To execute a script you should enter with some of commands below: \n`
  + `    npm run ${colors.green('command')} \n`
  + `  ou \n`
  + `    yarn ${colors.green('command')} \n\n`
  + `▶️ ${colors.green('start')}                 -> Alias for build and server scripts.\n`
  + `▶️ ${colors.green('start:dev')}             -> Roda aplicação local em modo Desenvolvimento.\n\n`
  + `▶️ ${colors.green('clean')}                 -> Delete dist, coverage and lib folder.\n`
  + `▶️ ${colors.green('build')}                 -> Run build Webpack in production mode by default.\n`
  + `▶️ ${colors.green('server')}                -> Run server Express in production mode by default.\n\n`
  + `▶️ ${colors.green('test')}                  -> Run all tests.\n`
  + `▶️ ${colors.green('test [file.spec.js]')}   -> Run test for specific file.\n`
  + `▶️ ${colors.green('test:w')}                -> Run all tests with --watchAll parameter.\n`
  + `▶️ ${colors.green('test:v')}                -> Run all tests with --verbose parameter.\n`
  + `▶️ ${colors.green('test:c')}                -> Reports application test coverage.\n`
  + `▶️ ${colors.green('test:d')}                -> Run all tests in debug mode\n\n`
  + `▶️ ${colors.green('analyse')}               -> Run Webpack analyser.\n`
  + `▶️ ${colors.green('lint:e')}                -> Run eslint on project.\n`
  + `▶️ ${colors.green('lint:s')}                -> Run SASS lint on project.\n`
  + `▶️ ${colors.green('type-check')}            -> Run Typescript check on project.\n`
  + `▶️ ${colors.green('type-check:w')}          -> Run Typescript check on project in watch mode.\n`;

console.info(commands);
