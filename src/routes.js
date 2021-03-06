import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController'

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

//Rota para login
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

export default routes;