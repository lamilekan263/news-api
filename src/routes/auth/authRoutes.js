
const Router = require('express').Router();
const { registerUser, loginUser } = require('./authController');


Router.route('/signup').post(registerUser);
Router.route('/login').post(loginUser);

module.exports = Router;