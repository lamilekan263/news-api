const { authMiddleware } = require('../../middlewares/authMiddle');
const { createBookmark, fetchBookmarks, deleteBookmark } = require('./bookmarkControllers');

const Router = require('express').Router();

Router.route('/').get(authMiddleware, fetchBookmarks).post(authMiddleware, createBookmark);
Router.route('/:id').delete(authMiddleware, deleteBookmark);

module.exports = Router;