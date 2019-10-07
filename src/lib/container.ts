import chalk from 'chalk';
import fs from 'fs';
import fsx from 'fs-extra';
import touch from 'touch';
import CLI from 'clui';
import { IComponent } from './types';
import { ComponentType } from './enum';

// Libs
import Files from './files';
import containerFile from '../template/container/container';
import containerTestFile from '../template/container/test';

const Spinner = CLI.Spinner;
const files = new Files();

class Container implements IComponent {
  type = '';
  name = '';
  component = '';
  path = './src/app/view';

  private createContainer() {
    this.createTest();

    const file = `${this.path}/${this.type}/${this.name}/${this.component}Container.tsx`;
    const content = containerFile(this.name);

    touch(file);
    fs.writeFileSync(file, content);

    console.info(chalk.green('  \u2713 Successful Container creation'));
  }

  private deleteContainer() {
    fsx.removeSync(`${this.path}/${this.type}/${this.name}/${this.component}Container.tsx`);
    console.error(chalk.red(`\n  \u2715 Container ${this.name.toUpperCase()} removed!`));
  }

  private createTest() {
    if (!files.directoryExists(`${this.path}/${this.type}/${this.name}/__test__`)) {
      fs.mkdirSync(`${this.path}/${this.type}/${this.name}/__test__`);
    }

    const file = `${this.path}/${this.type}/${this.name}/__test__/${this.component}Container.spec.tsx`;
    const content = containerTestFile(this.name);

    touch(file);
    fs.writeFileSync(file, content);

    console.info(chalk.green('  \u2713 Successful ContainerTest creation'));
  }

  private deleteTest() {
    fsx.removeSync(`${this.path}/${this.type}/${this.name}/__test__/${this.component}Container.spec.tsx`);
    console.error(chalk.red(`\n  \u2715 Testes removed!`));
  }

  public delete(type: ComponentType, name: string) {
    const status = new Spinner('Deleting Container structure, please wait...');
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
        console.error(chalk.red(`\n  The project don't have this Container!\n`));
        process.exit();
      }

      this.deleteContainer();
      this.deleteTest();
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

    if (type == ComponentType.PAGE) {
      this.type = 'pages';
    } else {
      this.type = 'shared';
    }

    this.name = name;
    this.component = component;

    try {
      if (!files.directoryExists(`${this.path}/${this.type}/${this.name}`)) {
        console.error(chalk.red(`\n  The project don't have this Component to plug container!\n`));
        process.exit();
      }

      this.createContainer();
    } catch (err) {
      throw err;
    } finally {
      status.stop();
    }
  }
}

export default Container;
