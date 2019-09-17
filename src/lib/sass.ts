import chalk from 'chalk';
import fs from 'fs';
import fsx from 'fs-extra';
import touch from 'touch';
import CLI from 'clui';
import { IStyles } from './types';
import { ComponentType } from './enum';

// Libs
import Files from './files';
import styleTemplate from '../template/style';

const Spinner = CLI.Spinner;
const files = new Files();

class Style implements IStyles {
  name = '';
  type = '';
  path = './src/app/assets/styles/scss';

  private setImport() {
    const data = fs.readFileSync(`${this.path}/main.scss`, 'utf-8');
    const result = data.replace(/\/\* Shared \*\//g, `/* Shared */\n@import './pages/${this.name}';`);
    fs.writeFileSync(`${this.path}/main.scss`, result, 'utf-8');
  }

  public createStyle() {
    const file = `${this.path}/${this.type}/${this.name.toLowerCase()}.scss`;
    const content = styleTemplate(this.name.charAt(0).toUpperCase() + this.name.slice(1));

    touch(file);
    fs.writeFileSync(file, content);

    this.setImport();

    console.info(chalk.green('  \u2713 Successful Style creation'));
  }

  private deleteStyle() {
    fsx.removeSync(`${this.path}/${this.type}/${this.name}.scss`);
    console.error(chalk.red(`\n  \u2715 Style removed!`));
  }

  public delete(type: ComponentType, name: string) {
    const status = new Spinner('Deleting Sass structure, please wait...');
    status.start();

    if (type == ComponentType.PAGE) {
      this.type = 'pages';
    } else {
      this.type = 'shared';
    }

    this.name = name;

    try {
      if (!files.directoryExists(`${this.path}/${this.type}/${this.name}`)) {
        console.error(chalk.red(`\n  The project don't have this style!\n`));
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
    const status = new Spinner('Creating Sass structure, please wait...');
    status.start();

    if (type == ComponentType.PAGE) {
      this.type = 'pages';
    } else {
      this.type = 'shared';
    }

    this.name = name;

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
