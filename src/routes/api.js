const api = require('express').Router();
const AuthRoutes = require('./auth/authRoutes');
const UserRoutes = require('./user/userRoutes');
const BookmarkRoutes = require('./bookmark/bookmarkRoute');

api.use('/auth', AuthRoutes);
api.use('/user', UserRoutes);
api.use('/bookmark', BookmarkRoutes);

module.exports = api;