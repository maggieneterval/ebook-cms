const express = require('express');
const users = express.Router();
const User = require('../../db/models/user');

//get all users:
users.get('/', (req, res, next) => {
  User.findAll({})
    .then(users => res.send(users))
    .catch(next);
});

//get one user by id:
users.get('/:id', (req, res, next) => {
  User.findById(req.params.id)
    .then(user => res.send(user))
    .catch(next);
});

//create new user:
users.post('/', (req, res, next) => {
  User.create(req.body)
    .then(user => res.send(user))
    .catch(next);
});

//update user:
users.put('/:id', (req, res, next) => {
  User.update(req.body, {
    where: {id: req.params.id},
    returning: true
  })
    .then(user => res.send(user))
    .catch(next);
});

//TODO: when you delete a user, need to delete that users' books and corresponding sections and blocks.
users.delete('/:id', (req, res, next) => {
  User.findById(req.params.id)
  .then(user => user.destroy())
  .then (() => res.send('Successfully deleted user.'))
  .catch(next);
});

module.exports = users;
