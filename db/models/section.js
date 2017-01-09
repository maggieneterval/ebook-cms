const Sequelize = require('sequelize');
const db = require('../index');
const Block = require('./block');

const Section = db.define('section', {
  index: {
    type: Sequelize.INTEGER
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  // defaultScope: {
  //     include: [
  //       { model: Block, where: { sectionId: this.id }}, //does this work? also need to find a way to recursively find children sections, etc.
  //     ]
  //   }
});

module.exports = Section;
