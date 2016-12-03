const express = require('express');
const sections = express.Router();
const Section = require('../../db/models/section');

//get all root sections for a particular book:
sections.get('/:bookId', (req, res, next) => {
  Section.findAll({
    where: {
      bookId: req.params.bookId,
      sectionId: null //no parent section
    }
  })
    .then(sections => res.send(sections))
    .catch(next);
});

//get all child sections of a particular section:
sections.get('/:parentSectionId', (req, res, next) => {
  Section.findById(req.params.id)
    .then(section => section.getChildSections())
    .then(childSections => res.send(childSections))
    .catch(next);
});

//TODO: set section's book and parent section. add section to its parent's child sections.
//create new section:
sections.post('/', (req, res, next) => {
  Section.create(req.body)
    .then(section => res.send(section))
    .catch(next);
});

//update section:
sections.put('/:id', (req, res, next) => {
  Section.update(req.body, {
    where: {id: req.params.id},
    returning: true
  })
    .then(section => res.send(section))
    .catch(next);
});

//TODO: when you delete a section, need to re-assign other sections' indices accordingly
sections.delete('/:id', (req, res, next) => {
  Section.findById(req.params.id)
  .then(section => section.destroy())
  .then(() => res.send('Successfully deleted section.'))
  .catch(next);
});

module.exports = sections;
