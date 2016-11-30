const db = require('../index');
const Block = require ('./block');
const Section = require('./section');
const Book = require('./book');
const User = require('./user');

Book.belongsTo(User);
User.hasMany(Book);

Section.belongsTo(Book);
Book.hasMany(Section);

Section.belongsTo(Section);
Section.hasMany(Section);

Block.belongsTo(Section);
Section.hasMany(Block);

module.exports = db;
