import bcrypt from 'bcryptjs';
import models from './../database/models/index';
import createToken from './create_token';

const getLogin = (req, res) => {
  res.render('login', { pageTitle: 'Admin Login', jsFile: ['login'], swal: true });
};
const postLogin = (req, res, next) => {
  const { username, password } = req.body;
  models.Staff.findOne({ where: { username } }).then((result) => {
    if (result && result.dataValues) {
      bcrypt.compare(password, result.dataValues.password, (err, isTrue) => {
        if (err) {
          next(err);
        } else if (isTrue) {
          const data = JSON.stringify({
            id: result.dataValues.id,
            adminName: result.dataValues.username,
          });
          createToken(data, res, (tokenErr, isToken) => {
            if (tokenErr) {
              next(tokenErr);
            } else if (isToken) {
              res.status(200).send(JSON.stringify({ rediect: '/admin/home' }));
            }
          });
        } else {
          res.send(JSON.stringify({ err: { errMsg: 'Invalied Password or Email' } }));
        }
      });
    } else {
      res.send(JSON.stringify({ err: { errMsg: 'Invalied Password or Email' } }));
    }
  });
};
export { getLogin, postLogin };
