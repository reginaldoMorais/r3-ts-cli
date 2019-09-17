import chalk from 'chalk';
import figlet from 'figlet';
import config from '../config';

export default (port: string, env: string) => {
  const { basePath } = config;

  console.info(chalk.yellow(figlet.textSync(`:: {{APP_TITLE}} ::`, { horizontalLayout: 'full' })));
  console.info(chalk.cyan(`==> ✅  Server Up!`));
  console.info(chalk.cyan(`==> 🌎  Mode: ${env}`));
  console.info(chalk.cyan(`==> 🌎  Server running on: ${basePath}`));
  console.info(chalk.cyan(`==> 🌎  Port: ${port}\n`));
};
