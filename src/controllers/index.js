import express from 'express';
import home from './home';
import { getLogin, postLogin } from './login';
import logout from './logout';
import events from './events';
import bookings from './bookings';
import { phoneVerifyStart } from './phone_verification';
import eventDetails from './eventDetails';
import checkId from './checkNumber';
import validLogin from './valid_login';
import adminEvents from './admin_events';
import adminCourses from './admin_courses';
import authintication from './authintication';
import adminHome from './admin_home';

const router = express.Router();

router
  .get('/', home)
  .get('/events', events)
  .get('/courses', events)
  .get('/bookings', bookings)
  .post('/phone/verification/start', phoneVerifyStart)
  .get('/eventdetails/:id', checkId, eventDetails)
  
  .use('/admin', authintication)
  .get('/admin/login', getLogin)
  .post('/admin/login', validLogin, postLogin)
  .get('/admin/logout', logout)
  .get('/admin/home', adminHome)
  .get('/admin/events', adminEvents)
  .get('/admin/courses', adminCourses);
  
export default router;
