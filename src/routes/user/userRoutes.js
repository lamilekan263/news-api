const { authMiddleware } = require('../../middlewares/authMiddle');
const { getProfile } = require('./userControllers');

const Router = require('express').Router();




Router.route('/profile').get(authMiddleware,getProfile);


module.exports = Router;