import { Express } from 'express';
import HealthController from '../controllers/HealthController';
import ReactAppController from '../controllers/ReactAppController';

export default (app: Express) => {
  app.get('/health', HealthController.health);
  app.get('/resource-status', HealthController.resourceStatus);
  app.get('/characters/:id', ReactAppController.render);
  app.get('*', ReactAppController.render);
};
