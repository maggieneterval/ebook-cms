const express = require('express');
const blocks = express.Router();
const Block = require('../../db/models/block');

//get all blocks:
blocks.get('/', (req, res, next) => {
  Block.findAll({})
    .then(blocks => res.send(blocks))
    .catch(next);
});

//get one block by index:
blocks.get('/:index', (req, res, next) => {
  Block.findOne({
    where: {
      index: req.params.index
    }
  })
    .then(block => res.send(block))
    .catch(next);
});

//create new block:
blocks.post('/', (req, res, next) => {
  Block.create(req.body)
    .then(block => res.send(block))
    .catch(next);
});

//update block:
blocks.put('/:id', (req, res, next) => {
  Block.update(req.body, {
    where: {id: req.params.id},
    returning: true
  })
    .then(block => res.send(block))
    .catch(next);
});

//TODO: when you delete a block, need to re-assign other blocks' indices accordingly
blocks.delete('/:id', (req, res, next) => {
  Block.findById(req.params.id)
  .then(block => block.destroy())
  .then(() => res.send('Successfully deleted block.'))
  .catch(next);
});

module.exports = blocks;
