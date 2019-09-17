import { Request, Response } from 'express';
import InternalServerException from '../exceptions/InternalServerException';

const packageJson = require('../../../package.json');

class HealthController {
  constructor() {}

  health(req: Request, res: Response) {
    res.sendStatus(200).send({ status: 'OK' });
  }

  resourceStatus(req: Request, res: Response) {
    try {
      res.send({
        applicationName: packageJson.name,
        implementationVersion: packageJson.version,
        implementationBuild: '201908',
        createdBy: packageJson.author
      });
    } catch (err) {
      new InternalServerException(err);
      res.sendStatus(500);
    }
  }
}

export default new HealthController();
