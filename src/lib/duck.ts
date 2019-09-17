import chalk from 'chalk';
import fs from 'fs';
import fsx from 'fs-extra';
import CLI from 'clui';
import touch from 'touch';
import { IDuck } from './types';

// Libs
import Files from './files';
import typesFile from '../template/duck/types';
import actionsFile from '../template/duck/actions';
import sagasFile from '../template/duck/sagas';
import reducerFile from '../template/duck/reducer';

const Spinner = CLI.Spinner;
const files = new Files();

class Duck implements IDuck {
  name = '';
  path = './src/app/redux/ducks';

  private createTypes() {
    const file = `${this.path}/${this.name}/types.ts`;
    const content = typesFile(this.name);

    touch(file);
    fs.writeFileSync(file, content);

    console.info(chalk.green('  \u2713 Successful Types creation'));
  }

  private createActions() {
    const file = `${this.path}/${this.name}/actions.ts`;
    const content = actionsFile(this.name);

    touch(file);
    fs.writeFileSync(file, content);

    console.info(chalk.green('  \u2713 Successful Actions creation'));
  }

  private createSagas() {
    const file = `${this.path}/${this.name}/sagas.ts`;
    const content = sagasFile(this.name);

    touch(file);
    fs.writeFileSync(file, content);

    console.info(chalk.green('  \u2713 Successful Sagas creation'));
  }

  private createReducer() {
    const file = `${this.path}/${this.name}/index.ts`;
    const content = reducerFile(this.name);

    touch(file);
    fs.writeFileSync(file, content);

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
    } catch (err) {
      throw err;
    } finally {
      status.stop();
    }
  }
}

export default Duck;
