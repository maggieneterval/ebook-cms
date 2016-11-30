const Sequelize = require('sequelize');
const db = require('../index');

const Block = db.define('block', {
  type: {
    type: Sequelize.ENUM('markdown', 'latex', 'diagram')
  },
  content: {
    type: Sequelize.TEXT
  },
  index: {
    type: Sequelize.INTEGER //need more elegant way to maintain order
  }
});

module.exports = Block;
