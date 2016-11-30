const express = require('express');
const apiRouter = express.Router();
const chaptersRouter = require('./chapter');

apiRouter.use('/chapters', chaptersRouter);

module.exports = apiRouter;
