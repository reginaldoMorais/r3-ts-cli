#!/usr/bin/env node

import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import program from 'commander';
import Inquirer from './lib/inquirer';
import { createProject, createRoute, createSharedComponent, createContainer, createDuck } from './commands';

const pkg = require('../package.json');

/**
 * Show cli header.
 */
const showAppHeader = () => {
  console.info(' ');
  console.info(chalk.blue(figlet.textSync('R3 TS CLI', { horizontalLayout: 'full' })));
  console.info(chalk.blueBright('  =    React + Redux + Router Generator (Typesript)    =\n\n'));
};

/**
 * Show the command line options.
 */
const showCommands = async () => {
  program
    .usage('aaaa')
    .version(pkg.version, '-v, --version', 'output the current version')
    .description("An example CLI for ordering pizza's")
    .option('-c, --create', 'create new React App')
    .option('-r, --route', 'add new route on App')
    .option('-s, --component', 'create new shared Component')
    .option('-k, --container', 'create new Container')
    .option('-d, --duck', 'create new Duck')
    .parse(process.argv);

  if (program.create) await createProject();
  else if (program.route) await createRoute();
  else if (program.pineapple) await createRoute();
  else if (program.component) await createSharedComponent();
  else if (program.container) await createContainer();
  else if (program.duck) await createDuck();

  if (!process.argv.slice(2).length) {
    program.outputHelp();
  }
};

/**
 * Show main menu.
 */
const showMenu = async () => {
  try {
    // const { createProject } from "./commands");
    const answers = await Inquirer.askMenuOption();

    switch (answers.option) {
      case 'Create a new project': {
        await createProject();
        break;
      }

      case 'Create a Route': {
        await createRoute();
        break;
      }

      case 'Create a Component': {
        await createSharedComponent();
        break;
      }

      case 'Create a Container': {
        await createContainer();
        break;
      }

      case 'Create a Duck': {
        await createDuck();
        break;
      }

      case 'Show available commands': {
        showCommands();
        break;
      }

      case 'Exit': {
        process.exit();
        break;
      }

      default: {
        process.exit();
        break;
      }
    }

    process.exit();
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
 * Main function.
 */
const run = () => {
  clear();
  showAppHeader();

  const [, , ...args] = process.argv || [];

  if (args.length > 0) {
    showCommands();
  } else {
    showMenu();
  }
};

run();
