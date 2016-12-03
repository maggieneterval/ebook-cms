const express = require('express');
const books = express.Router();
const Book = require('../../db/models/book');

//get all books that belong to a particular user:
books.get('/:userId', (req, res, next) => {
  Book.findAll({
    where: {
      userId: req.params.userId
    }
  })
  .then(books => res.send(books))
  .catch(next);
});

//get one book by id:
books.get('/:id', (req, res, next) => {
  Book.findById(req.params.id)
    .then(book => res.send(book))
    .catch(next);
});

//create new book:
books.post('/:userId', (req, res, next) => {
  Book.create(req.body)
    .then(block => res.send(block))
    .catch(next);
});

//update book:
books.put('/:id', (req, res, next) => {
  Book.update(req.body, {
    where: {id: req.params.id},
    returning: true
  })
    .then(book => res.send(book))
    .catch(next);
});

//delete book:
books.delete('/:id', (req, res, next) => {
  Book.findById(req.params.id)
  .then(book => book.destroy())
  .then(() => res.send('Successfully deleted book.'))
  .catch(next);
});

module.exports = books;
