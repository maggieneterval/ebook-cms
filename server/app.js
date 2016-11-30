const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../db/models');
const Book = require('../db/models/book');
const Block = require('../db/models/block');
const Section = require('../db/models/section');
const User = require('../db/models/user');
const seed = require('../db/seed');
const apiRouter = require('./api');

app.use(express.static('public'));
app.use(bodyParser.json());

app.use('/api', apiRouter);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.use((err, req, res) => {
  console.error(err.stack);
  res.sendStatus(500);
});

//force:true in development only
db.sync({force: true})
  .then(() => db.Promise.map(seed.user, user => User.create(user)))
  .then(() => db.Promise.map(seed.book, book => Book.create(book)))
  .then(() => db.Promise.map(seed.section, section => Section.create(section)))
  .then(() => db.Promise.map(seed.block, block => Block.create(block)))
  .then(() => app.listen(process.env.PORT || 8080));
