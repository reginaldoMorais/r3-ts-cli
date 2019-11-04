import chalk from 'chalk';
import fs from 'fs';
import fsx from 'fs-extra';

export default class Project {
  public deleteProject(projectName: string) {
    fsx.removeSync(projectName);
    console.error(chalk.red(`\n  \u2715 Não foi possível criar o Projeto ${projectName.toUpperCase()}!`));
    process.exit();
  }

  public setProjectName(projectName: string) {
    const files = [
      `${process.cwd()}/${projectName}/src/client/index.html`,
      `${process.cwd()}/${projectName}/src/client/index.ejs`,
      `${process.cwd()}/${projectName}/src/server/console.ts`,
      `${process.cwd()}/${projectName}/src/server/templates/template.ts`,
      `${process.cwd()}/${projectName}/package.json`,
      `${process.cwd()}/${projectName}/commands-ls.js`,
      `${process.cwd()}/${projectName}/README.md`,
      `${process.cwd()}/${projectName}/.r3-cli`,
    ];

    files.forEach(file => {
      try {
        const data = fs.readFileSync(file, 'utf-8');
        let result;

        if (file.indexOf('package.json') > 0) {
          result = data.replace(/{{APP_TITLE}}/g, projectName.toLowerCase());
        } else {
          result = data.replace(/{{APP_TITLE}}/g, projectName.toUpperCase());
        }

        fs.writeFileSync(file, result, 'utf-8');
      } catch (err) {
        console.error(err);
        this.deleteProject(projectName);
      }
    });

    console.info(chalk.green('  \u2713 Project configured'));
  }

  public copyFiles(projectName: string) {
    try {
      console.log(`${projectName}/archive.zip`);

      fsx.copySync(`template-project`, `${projectName}`);
      console.info(chalk.green('  \u2713 Project created'));
    } catch (err) {
      console.error(err);
    }
  }

  public createProjectFolder(projectName: string) {
    fs.mkdirSync(projectName);
  }
}
