const api = require('express').Router();
const AuthRoutes = require('./auth/authRoutes')



api.use('/auth', AuthRoutes);



module.exports = api;