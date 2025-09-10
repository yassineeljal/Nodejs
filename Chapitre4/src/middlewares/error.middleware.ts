import { Request, Response, NextFunction } from 'express';

export function errorMiddleware(req: Request, res: Response, next: NextFunction): void {
  // Logique d'authentification
  next();
}