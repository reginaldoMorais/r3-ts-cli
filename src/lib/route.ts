import chalk from 'chalk';
import fs from 'fs';
import CLI from 'clui';

// Libs

const Spinner = CLI.Spinner;

class Route {
  private setImport(file: any, importStr: string) {
    const data = fs.readFileSync(file, 'utf-8');
    const result = data.replace(/\/\* Routes \*\//g, importStr);
    fs.writeFileSync(file, result, 'utf-8');
  }

  private setRoute(file: any, routeStr: string) {
    const data = fs.readFileSync(file, 'utf-8');
    const result = data.replace(/<Switch>/g, routeStr);
    fs.writeFileSync(file, result, 'utf-8');
  }

  private setMenu(name: string, choise: any) {
    const file = `./src/redux/ducks/menu/index.js`;
    let link;

    if (choise.option == 'internal') {
      link = `/in/${name}`;
    } else {
      link = `/${name}`;
    }

    const data = fs.readFileSync(file, 'utf-8');
    const content = `}\n    {
      id: '${name}',
      name: '${name.charAt(0).toUpperCase() + name.slice(1)}',
      link: '${link}',
      icon: 'fa-circle',
      submenu: [],
      active: false,
      show: true,
    } /* r3-cli-menu-tag */,`;

    const result = data.replace(/} \/\* r3-cli-menu-tag \*\/,/g, content);
    fs.writeFileSync(file, result, 'utf-8');
  }

  public createRoute(name: string, choise: any) {
    const status = new Spinner('Implementing a new Route, please wait...');
    status.start();

    try {
      const container = name.charAt(0).toUpperCase() + name.slice(1) + 'Container';
      const component = name.charAt(0).toUpperCase() + name.slice(1);
      let file;

      const importStr = `/* Routes */\nimport ${component} from '../pages/${name}/${container}';`;
      let routeStr;

      if (choise.routerOption == 'internal') {
        file = `./src/app/view/templates/In.tsx`;
        routeStr = `<Switch>\n            <Route exact key="${name}" path="/in/${name}" component={${component}} />`;
      } else {
        file = `./src/app/view/templates/Out.tsx`;
        routeStr = `<Switch>\n            <Route exact key="${name}" path="/${name}" component={${component}} />`;
      }

      try {
        this.setImport(file, importStr);
        this.setRoute(file, routeStr);
        // TODO: this.setMenu(name, choise);
      } catch (err) {
        console.error(chalk.red(`\n  \u2715 Error creating Route ${name.toUpperCase()}!`));
        console.error(err);
      }

      console.info(chalk.green('  \u2713 Successful Route creation'));
    } catch (err) {
      throw err;
    } finally {
      setTimeout(() => {
        status.stop();
      }, 500);
    }
  }
}

export default Route;
