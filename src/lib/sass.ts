import chalk from 'chalk';
import fs from 'fs';
import fsx from 'fs-extra';
import touch from 'touch';
import CLI from 'clui';
import { IStyles } from './types';
import { ComponentType } from './enum';

// Libs
import Files from './files';
import styleTemplate from '../template/component/style';

const Spinner = CLI.Spinner;
const files = new Files();

class Style implements IStyles {
  name = '';
  type = '';
  componentType: ComponentType = 1;
  path = './src/app/assets/styles/scss';

  private setSharedImport() {
    const data = fs.readFileSync(`${this.path}/main.scss`, 'utf-8');
    const result = data.replace(/\/\* Shared \*\//g, `/* Shared */\n@import './shared/${this.name}';`);
    fs.writeFileSync(`${this.path}/main.scss`, result, 'utf-8');
  }

  private setPagesImport() {
    const data = fs.readFileSync(`${this.path}/main.scss`, 'utf-8');
    const result = data.replace(/\/\* Pages \*\//g, `/* Pages */\n@import './pages/${this.name}';`);
    fs.writeFileSync(`${this.path}/main.scss`, result, 'utf-8');
  }

  public createStyle() {
    const file = `${this.path}/${this.type}/${this.name.toLowerCase()}.scss`;
    const content = styleTemplate(this.name.charAt(0).toUpperCase() + this.name.slice(1));

    touch(file);
    fs.writeFileSync(file, content);

    if (this.componentType === ComponentType.PAGE) {
      this.setPagesImport();
    } else {
      this.setSharedImport();
    }

    console.info(chalk.green('  \u2713 Successful Style creation'));
  }

  private deleteStyle() {
    fsx.removeSync(`${this.path}/${this.type}/${this.name}.scss`);
    console.error(chalk.red(`\n  \u2715 Style removed!`));
  }

  public delete(type: ComponentType, name: string) {
    const status = new Spinner('Deleting Sass structure, please wait...');
    status.start();

    this.name = name;
    this.componentType = type;
    if (this.componentType === ComponentType.PAGE) {
      this.type = 'pages';
    } else {
      this.type = 'shared';
    }

    try {
      if (files.directoryExists(`${this.path}/${this.type}/${this.name}.scss`)) {
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

    this.name = name;
    this.componentType = type;
    if (this.componentType === ComponentType.PAGE) {
      this.type = 'pages';
    } else {
      this.type = 'shared';
    }

    try {
      if (files.directoryExists(`${this.path}/${this.type}/${this.name}.scss`)) {
        console.error(chalk.red(`\n  The project already have this style!\n`));
        process.exit();
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
