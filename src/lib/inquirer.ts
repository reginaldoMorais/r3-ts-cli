import inquirer from 'inquirer';

class Inquirer {
  public static async askMenuOption() {
    const questions = [
      {
        name: 'option',
        type: 'list',
        message: 'What do you want to do:',
        choices: [
          'Create a new project',
          'Create a Route',
          'Create a Component',
          'Create a Container',
          'Create a Duck',
          'Show available commands',
          'Exit',
        ],
        default: 'Create new project',
      },
    ];
    return inquirer.prompt(questions);
  }

  public static async askProjectName() {
    const questions = [
      {
        name: 'projectName',
        type: 'input',
        message: 'Enter a name for the Project:',
        validate: (value: string) => {
          if (value.length) {
            return true;
          } else {
            return 'Please enter a name for the Project.';
          }
        },
      },
    ];
    return inquirer.prompt(questions);
  }

  public static async askComponentName() {
    const questions = [
      {
        name: 'componentName',
        type: 'input',
        message: 'Enter a Component name.\n The characters must be lowercase:',
        validate: (value: string) => {
          if (value.length) {
            return true;
          } else {
            return 'Please enter a valid Component name.';
          }
        },
      },
    ];
    return inquirer.prompt(questions);
  }

  public static async askContainerName() {
    const questions = [
      {
        name: 'containerName',
        type: 'input',
        message: 'Enter a Container name.\n The characters must be lowercase:',
        validate: (value: string) => {
          if (value.length) {
            return true;
          } else {
            return 'Please enter a valid Container name.';
          }
        },
      },
    ];
    return inquirer.prompt(questions);
  }

  public static async askRouteName() {
    const questions = [
      {
        name: 'routeName',
        type: 'input',
        message: 'Enter a Route name.\n The characters must be lowercase:',
        validate: (value: string) => {
          if (value.length) {
            return true;
          } else {
            return 'Please enter a valid Route.';
          }
        },
      },
    ];
    return inquirer.prompt(questions);
  }

  public static async askRouteType() {
    const questions = [
      {
        name: 'routerOption',
        type: 'list',
        message: 'Tell me which route type do you want:',
        choices: ['external', 'internal'],
        default: 'external',
      },
    ];
    return inquirer.prompt(questions);
  }

  public static async askDuckName() {
    const questions = [
      {
        name: 'duckName',
        type: 'input',
        message: 'Enter a Duck name.\n The characters must be lowercase:',
        validate: (value: string) => {
          if (value.length) {
            return true;
          } else {
            return 'Please enter a valid Duck.';
          }
        },
      },
    ];
    return inquirer.prompt(questions);
  }

  public static async askDuckCreate() {
    const questions = [
      {
        name: 'duckCreate',
        type: 'confirm',
        message: 'Do you want create a Duck for it?',
        default: true,
      },
    ];
    return inquirer.prompt(questions);
  }
}

export default Inquirer;
