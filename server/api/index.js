const express = require('express');
const apiRouter = express.Router();
const userRouter = require('./user');
const bookRouter = require('./book');
const sectionRouter = require('./section');
const blockRouter = require('./block');

apiRouter.use('/users', userRouter);
apiRouter.use('/books', bookRouter);
apiRouter.use('/sections', sectionRouter);
apiRouter.use('/blocks', blockRouter);

module.exports = apiRouter;
