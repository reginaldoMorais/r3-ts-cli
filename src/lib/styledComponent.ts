import chalk from 'chalk';
import fs from 'fs';
import fsx from 'fs-extra';
import touch from 'touch';
import CLI from 'clui';
import { IStyles } from './types';
import { ComponentType } from './enum';

// Libs
import Files from './files';
import styledComponentTemplate from '../template/styledComponentFile';

const Spinner = CLI.Spinner;
const files = new Files();

class Style implements IStyles {
  name = '';
  type = '';
  path = './src/app/view';
  component: string = '';

  public createStyle() {
    const file = `${this.path}/${this.type}/${this.name}/${this.component}Style.ts`;
    const content = styledComponentTemplate(this.component);

    touch(file);
    fs.writeFileSync(file, content);

    console.info(chalk.green('  \u2713 Successful Styled Component creation'));
  }

  private deleteStyle() {
    fsx.removeSync(`${this.path}/${this.type}/${this.name}/${this.component}Style.ts`);
    console.error(chalk.red(`\n  \u2715 Component ${this.name.toUpperCase()} removed!`));
  }

  public delete(type: ComponentType, name: string) {
    const status = new Spinner('Deleting Styled Component structure, please wait...');
    status.start();

    const component = name.charAt(0).toUpperCase() + name.slice(1);

    if (type == ComponentType.PAGE) {
      this.type = 'pages';
    } else {
      this.type = 'shared';
    }

    this.name = name;
    this.component = component;

    try {
      if (!files.directoryExists(`${this.path}/${this.type}/${this.name}`)) {
        console.error(chalk.red(`\n  The project don't have this styled Component!\n`));
        process.exit();
      }

      this.deleteStyle();
    } catch (err) {
      throw err;
    } finally {
      status.stop();
    }
  }

  public create(type: ComponentType, name: string) {
    const status = new Spinner('Creating Styled Component structure, please wait...');
    status.start();

    const component = name.charAt(0).toUpperCase() + name.slice(1);

    if (type == ComponentType.PAGE) {
      this.type = 'pages';
    } else {
      this.type = 'shared';
    }

    this.name = name;
    this.component = component;

    try {
      if (!files.directoryExists(`${this.path}/${this.type}/${this.name}`)) {
        fs.mkdirSync(`${this.path}/${this.type}/${this.name}`);
      }

      this.createStyle();
    } catch (err) {
      throw err;
    } finally {
      status.stop();
    }
  }
}

export default Style;
