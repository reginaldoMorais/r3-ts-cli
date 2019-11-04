import chalk from 'chalk';
import fs from 'fs';
import fsx from 'fs-extra';
import CLI from 'clui';
import touch from 'touch';
import { IDuck } from './types';

// Libs
import Files from './files';
import typesTemplate from '../template/duck/types';
import actionsTemplate from '../template/duck/actions';
import sagasTemplate from '../template/duck/sagas';
import reducerTemplate from '../template/duck/reducer';

const Spinner = CLI.Spinner;
const files = new Files();

class Duck implements IDuck {
  name = '';
  path = './src/app/redux/ducks';

  private createTypes() {
    const file = `${this.path}/${this.name}/types.ts`;
    const content = typesTemplate(this.name);

    touch(file);
    fs.writeFileSync(file, content);

    console.info(chalk.green('  \u2713 Successful Types creation'));
  }

  private createActions() {
    const file = `${this.path}/${this.name}/actions.ts`;
    const content = actionsTemplate(this.name);

    touch(file);
    fs.writeFileSync(file, content);

    console.info(chalk.green('  \u2713 Successful Actions creation'));
  }

  private createSagas() {
    const file = `${this.path}/${this.name}/sagas.ts`;
    const rootSaga = `${this.path}/rootSaga.ts`;
    const component = this.name.charAt(0).toUpperCase() + this.name.slice(1);
    const content = sagasTemplate(this.name);

    touch(file);
    fs.writeFileSync(file, content);

    const data = fs.readFileSync(rootSaga, 'utf-8');
    let result = data.replace(
      /\/\* Sagas \*\//g,
      `/* Sagas */\nimport { watch${component}LoadRequest } from './${this.name}/sagas';`,
    );
    result = result.replace(/return yield all\(\[/g, `return yield all([\n    watch${component}LoadRequest(),`);

    fs.writeFileSync(rootSaga, result, 'utf-8');

    console.info(chalk.green('  \u2713 Successful Sagas creation'));
  }

  private createReducer() {
    const file = `${this.path}/${this.name}/index.ts`;
    const rootReducer = `${this.path}/rootReducer.ts`;
    const content = reducerTemplate(this.name);

    touch(file);
    fs.writeFileSync(file, content);

    const data = fs.readFileSync(rootReducer, 'utf-8');
    let result = data.replace(/\/\* Reducers \*\//g, `/* Reducers */\nimport ${this.name} from './${this.name}';`);
    result = result.replace(
      /const combineAppReducers = combineReducers\(\{/g,
      `const combineAppReducers = combineReducers({\n  ${this.name},`,
    );

    fs.writeFileSync(rootReducer, result, 'utf-8');

    console.info(chalk.green('  \u2713 Successful Reducer creation'));
  }

  private setType() {
    const types = `${this.path}/../store/types.ts`;
    const component = this.name.charAt(0).toUpperCase() + this.name.slice(1);

    const data = fs.readFileSync(types, 'utf-8');
    let result = data.replace(
      /\/\* Types \*\//g,
      `/* Types */\nimport { I${component}State } from '../ducks/${this.name}/types';`,
    );
    result = result.replace(
      /export interface IApplicationState \{/g,
      `export interface IApplicationState \{\n  ${this.name}: I${component}State;`,
    );
    '';

    fs.writeFileSync(types, result, 'utf-8');

    console.info(chalk.green('  \u2713 Successful Reducer creation'));
  }

  public delete(name: string) {
    const status = new Spinner('Deleting Duck structure, please wait...');
    status.start();

    this.name = name;

    try {
      if (!files.directoryExists(`${this.path}/${this.name}`)) {
        console.error(chalk.red(`\n  The project don't have this Duck!\n`));
        process.exit();
      }

      fsx.removeSync(`${this.path}/${this.name}`);
      console.error(chalk.red(`\n  \u2715 Duck ${this.name} removed!`));
    } catch (err) {
      throw err;
    } finally {
      status.stop();
    }
  }

  public create(name: string) {
    const status = new Spinner('Creating Duck structure, please wait...');
    status.start();

    this.name = name;

    try {
      if (files.directoryExists(`${this.path}/${this.name}`)) {
        console.error(chalk.red('\n  The project already have this Duck!\n'));
        process.exit();
      } else {
        fs.mkdirSync(`${this.path}/${this.name}`);
      }

      this.createTypes();
      this.createActions();
      this.createSagas();
      this.createReducer();
      this.setType();
    } catch (err) {
      throw err;
    } finally {
      status.stop();
    }
  }
}

export default Duck;
