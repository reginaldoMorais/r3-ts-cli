import chalk from 'chalk';
import CLI from 'clui';
import lodash from 'lodash';

// Libs
import Inquirer from './lib/inquirer';
import Files from './lib/files';
import Project from './lib/project';
import Route from './lib/route';
import Component from './lib/component';
import Container from './lib/container';
import Duck from './lib/duck';
import Style from './lib/styles';
import { ComponentType, StylesType } from './lib/enum';

const Spinner = CLI.Spinner;
const files = new Files();
const project = new Project();
const route = new Route();
const component = new Component();
const container = new Container();
const duck = new Duck();
const style = new Style();
let projectName: any = '';

/**
 * Verifica se o comando está rodando num projeto válido.
 */
const hasProject = () => {
  if (!files.fileExists(`.r3-cli`)) {
    console.error(chalk.red('\n  No valid project found!\n'));
    process.exit();
  }
};

const test = () => {
  const rootDir = lodash.last(process.cwd().split('/'));
  console.info(`Current directory: ${rootDir}`);
};

/**
 * Cria a estrutura de rota e view, caso ele já não existão.
 */
const createRoute = async () => {
  try {
    hasProject();

    console.info('This option will create a new Route with a Component.');
    const answers = await Inquirer.askRouteName();
    const routeName = answers.routeName;

    if (files.directoryExists(`./src/app/view/pages/${routeName}`)) {
      console.error(chalk.red('\n  This Route is already exists!\n'));
      process.exit();
    }

    console.info(chalk.blue('\u25A0 Creating new Component, please wait...'));
    await component.create(ComponentType.PAGE, routeName.toString());

    console.info(chalk.blue('\u25A0 Creating new Container, please wait...'));
    await container.create(ComponentType.PAGE, routeName.toString());

    console.info(chalk.blue('\u25A0 Creating a new Style, please wait...'));
    await style.create(StylesType.SASS, ComponentType.PAGE, routeName.toString());
    await style.create(StylesType.STYLED, ComponentType.PAGE, routeName.toString());

    const duckChoise = await Inquirer.askDuckCreate();

    if (duckChoise.duckCreate) {
      console.info(chalk.blue('\u25A0 Creating a new Duck, please wait...'));
      await duck.create(routeName.toString());
    }

    const routerChoise = await Inquirer.askRouteType();

    console.info(chalk.blue('\u25A0 Creating a new Route, please wait...'));
    await route.createRoute(routeName.toString(), routerChoise);
  } catch (err) {
    if (err) {
      switch (err.code) {
        default:
          console.error(err);
      }
    }
  }
};

/**
 * Cria a estrutura de rota e view, caso ele já não existão.
 */
const createSharedComponent = async () => {
  try {
    hasProject();

    console.info('This option will create a shared Component.');
    const answers = await Inquirer.askComponentName();
    const componentName = answers.componentName;

    if (files.directoryExists(`./src/app/view/shared/${componentName}`)) {
      console.error(chalk.red('\n  This Component is already exists!\n'));
      process.exit();
    }

    console.info(chalk.blue('\u25A0 Creating new Component, please wait...'));
    await component.create(ComponentType.SHARED, componentName.toString());

    console.info(chalk.blue('\u25A0 Creating a new Style, please wait...'));
    await style.create(StylesType.SASS, ComponentType.SHARED, componentName.toString());
    await style.create(StylesType.STYLED, ComponentType.SHARED, componentName.toString());

    const duckChoise = await Inquirer.askDuckCreate();

    if (duckChoise.duckCreate) {
      console.info(chalk.blue('\u25A0 Creating a new Duck, please wait...'));
      await duck.create(componentName.toString());
    }
  } catch (err) {
    if (err) {
      switch (err.code) {
        default:
          console.error(err);
      }
    }
  }
};

/**
 * Cria a estrutura de rota e view, caso ele já não existão.
 */
const createContainer = async () => {
  try {
    hasProject();

    console.info('This option will create a Container to plug a Component.');
    const answers = await Inquirer.askContainerName();
    const containerName = answers.containerName;

    console.info(chalk.blue('\u25A0 Creating new Component, please wait...'));
    await container.create(ComponentType.SHARED, containerName.toString());
  } catch (err) {
    if (err) {
      switch (err.code) {
        default:
          console.error(err);
      }
    }
  }
};

/**
 * Cria a estrutura de rota e view, caso ele já não existão.
 */
const createDuck = async () => {
  try {
    hasProject();

    console.info('This option will create a redux estructure for your project.');
    const answers = await Inquirer.askDuckName();
    const duckName = answers.duckName;

    console.info(chalk.blue('\u25A0 Creating new Duck, please wait...'));
    await duck.create(duckName.toString());
  } catch (err) {
    if (err) {
      switch (err.code) {
        default:
          console.error(err);
      }
    }
  }
};

/**
 * Cria a estrutura do projeto, caso ele já não exista.
 */
const createProject = async () => {
  try {
    const answers = await Inquirer.askProjectName();
    projectName = answers.projectName;

    if (files.directoryExists(projectName)) {
      console.error(chalk.red('\n  A project with this name already exists!\n'));
      process.exit();
    }

    console.info(chalk.blue('\u25A0 Creating Project, please wait...'));

    const status = new Spinner(`Processing files for the new project, please wait...`);
    status.start();

    try {
      await project.createProjectFolder(projectName);
      await project.copyFiles(projectName);
      await project.setProjectName(projectName);
    } catch (err) {
      throw err;
    } finally {
      setTimeout(() => {
        status.stop();
      }, 500);
    }
  } catch (err) {
    if (err) {
      switch (err.code) {
        default: {
          console.error(err);
          project.deleteProject(projectName);
        }
      }
    }
  }
};

export { createProject, createRoute, createSharedComponent, createContainer, createDuck };
