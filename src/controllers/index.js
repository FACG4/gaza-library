import express from 'express';
import home from './home';
import { getLogin, postLogin } from './login';
import logout from './logout';
import events from './events';
import { getAdminPage, postEvent } from './adminAddEvent';
import { getAddCoursePage, postCourse } from './adminAddCourse';
import eventDetails from './eventDetails';
import checkId from './checkNumber';
import validLogin from './valid_login';
import adminEvents from './admin_events';
import adminCourses from './admin_courses';
import { validateAddEvent, validateAddCourse } from './validate_course_event';
import authintication from './authintication';
import adminHome from './admin_home';

const router = express.Router();

router
  .get('/', home)
  .get('/events', events)
  .get('/courses', events)
  .get('/eventdetails/:id', checkId, eventDetails)
  .use('/admin', authintication)
  .get('/admin/login', getLogin)
  .get('/admin/logout', logout)
  .post('/admin/login', validLogin, postLogin)
  .get('/admin/events', adminEvents)
  .get('/admin/courses', adminCourses)
  .get('/courses', events)
  .get('/admin/addevent', getAdminPage)
  .post('/admin/addevent', validateAddEvent, postEvent)
  .get('/admin/addcourse', getAddCoursePage)
  .post('/admin/addcourse', validateAddCourse, postCourse)
  .get('/eventdetails/:id', checkId, eventDetails)
  .get('/admin/home', adminHome);

export default router;
