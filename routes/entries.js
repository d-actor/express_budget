const express = require('express');
const router = express.Router();
const Entry = require('../models').Entry;

router.get('/', (req, res) => {
  Entry.all()
    .then( entries => {
    return res.json(entries);
  })
    .catch( err => {
    return res.status(400).send(err)
  });
})

router.post('/', (req, res) => {
  const { amt, description, date, type } = req.body;
  Entry.create({ amt, description, date, type })
    .then( entry => {
      return res.json(entry);
    })
    .catch( err => {
      return res.status(400).send(err)
    })
});

module.exports = router;