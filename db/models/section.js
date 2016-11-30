const Sequelize = require('sequelize');
const db = require('../index');

const Section = db.define('section', {
  index: {
    type: Sequelize.INTEGER
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Section;