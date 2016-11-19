const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../db');
const Client = require('../db/models/client');

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.post('/api/clients', (req, res, next) => {
  Client.create(req.body)
  .then(() => res.sendStatus(201))
  .catch(next);
});

app.use((err, req, res) => {
  console.error(err.stack);
  res.sendStatus(500);
});

db.sync({force: true}).then(() => {
  app.listen(process.env.PORT || 8080);
});


