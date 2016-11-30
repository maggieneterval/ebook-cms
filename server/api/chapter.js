const express = require('express');
const chapters = express.Router();
const Chapter = require('../../db/models/section');

chapters.get('/', (req, res, next) => {
  Chapter.findAll({})
    .then(chapters => res.send(chapters))
    .catch(next);
});

chapters.get('/:index', (req, res, next) => {
  Chapter.findOne({
    where: {
      index: req.params.index
    }
  })
    .then(chapter => res.send(chapter))
    .catch(next);
});

chapters.post('/', (req, res, next) => {
  Chapter.create(req.body)
    .then(chapter => res.send(chapter))
    .catch(next);
});

chapters.put('/:id', (req, res, next) => {
  Chapter.update(req.body, {
    where: {id: req.params.id},
    returning: true
  })
    .then(chapter => res.send(chapter))
    .catch(next);
});

//TODO: when you delete a chapter, need to re-assign other chapters' indices accordingly
chapters.delete('/:id', (req, res, next) => {
  Chapter.findById(req.params.id)
  .then(chapter => chapter.destroy())
  .catch(next);
});

module.exports = chapters;
