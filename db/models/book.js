const Sequelize = require('sequelize');
const db = require('../index');

const Book = db.define('book', {
  title: {
    type: Sequelize.STRING
  }
});

module.exports = Book;