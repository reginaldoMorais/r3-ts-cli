import chalk from 'chalk';
import fs from 'fs';
import fsx from 'fs-extra';
import touch from 'touch';
import CLI from 'clui';
import { IComponent } from './types';
import { ComponentType } from './enum';

// Libs
import Files from './files';
import componentFile from '../template/component/component';
import typesFile from '../template/component/types';
import componentTestFile from '../template/component/test';

const Spinner = CLI.Spinner;
const files = new Files();

class Component implements IComponent {
  type = '';
  name = '';
  component = '';
  path = './src/app/view';

  private createComponent() {
    const file = `${this.path}/${this.type}/${this.name}/${this.component}.tsx`;
    const content = componentFile(this.name);

    touch(file);
    fs.writeFileSync(file, content);

    console.info(chalk.green('  \u2713 Successful Component creation'));
  }

  private deleteComponent() {
    fsx.removeSync(`${this.path}/${this.type}/${this.name}/${this.component}.tsx`);
    console.error(chalk.red(`\n  \u2715 Component ${this.name.toUpperCase()} removed!`));
  }

  private createTypes() {
    const file = `${this.path}/${this.type}/${this.name}/types.ts`;
    const content = typesFile(this.name);

    touch(file);
    fs.writeFileSync(file, content);

    console.info(chalk.green('  \u2713 Successful Types creation'));
  }

  private deleteTypes() {
    fsx.removeSync(`${this.path}/${this.type}/${this.name}/types.ts`);
    console.error(chalk.red(`\n  \u2715 Types removed!`));
  }

  private createTest() {
    if (!files.directoryExists(`${this.path}/${this.type}/${this.name}/__test__`)) {
      fs.mkdirSync(`${this.path}/${this.type}/${this.name}/__test__`);
    }

    const file = `${this.path}/${this.type}/${this.name}/__test__/${this.component}.spec.tsx`;
    const content = componentTestFile(this.name);

    touch(file);
    fs.writeFileSync(file, content);

    console.info(chalk.green('  \u2713 Successful ComponentTest creation'));
  }

  private deleteTest() {
    fsx.removeSync(`${this.path}/${this.type}/${this.name}/__test__/${this.component}.spec.tsx`);
    console.error(chalk.red(`\n  \u2715 Testes removed!`));
  }

  public delete(type: ComponentType, name: string) {
    const status = new Spinner('Deleting Component structure, please wait...');
    status.start();

    const component = name.charAt(0).toUpperCase() + name.slice(1);

    this.name = name;
    this.component = component;
    if (type == ComponentType.PAGE) {
      this.type = 'pages';
    } else {
      this.type = 'shared';
    }

    try {
      if (!files.directoryExists(`${this.path}/${this.type}/${this.name}`)) {
        console.error(chalk.red(`\n  The project don't have this Component!\n`));
        process.exit();
      }

      this.deleteComponent();
      this.deleteTest();
      this.deleteTypes();
    } catch (err) {
      throw err;
    } finally {
      status.stop();
    }
  }

  public create(type: ComponentType, name: string) {
    const status = new Spinner('Creating View structure, please wait...');
    status.start();

    const component = name.charAt(0).toUpperCase() + name.slice(1);

    this.name = name;
    this.component = component;
    if (type == ComponentType.PAGE) {
      this.type = 'pages';
    } else {
      this.type = 'shared';
    }

    try {
      if (!files.directoryExists(`${this.path}/${this.type}/${this.name}`)) {
        fs.mkdirSync(`${this.path}/${this.type}/${this.name}`);
      }

      this.createComponent();
      this.createTest();
      this.createTypes();
    } catch (err) {
      throw err;
    } finally {
      status.stop();
    }
  }
}

export default Component;
