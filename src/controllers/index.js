import express from 'express';
import home from './home';
import { getLogin, postLogin } from './login';
import logout from './logout';
import events from './events';

const router = express.Router();

router
  .get('/', home)
  .get('/admin/login', getLogin)
  .post('/admin/login', postLogin)
  .get('/admin/logout', logout)
  .get('/events', events);

export default router;
