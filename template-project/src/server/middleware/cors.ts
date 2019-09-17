import { Request, Response, NextFunction } from 'express';

export default (req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,  POST, OPTIONS, PUT');
  res.header('Access-Control-Allow-Headers', 'Orign, X-Requested-With, Content-Type, Accept');
  next();
};
