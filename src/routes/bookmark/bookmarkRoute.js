const { createBookmark } = require('./bookmarkControllers');

const Router = require('express').Router();

Router.route('/').post(createBookmark);
Router.route('/:id').delete();

module.exports = Router;