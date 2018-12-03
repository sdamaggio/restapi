const express = require('express');
const router = express.Router();
const Farmer = require('../models/farmer');

// get a list of farmers from the db
router.get('/farmers', function(req, res){
  res.send({ type: 'GET'});
});

// add new farmer to the db
router.post('/farmers', function(req, res){
  Farmer.create(req.body).then(function(farmer){
    res.send(farmer);
  });
});

// update a farmer in the db
router.put('/farmers/:id', function(req, res){
  res.send({ type: 'PUT'});
});

// delete a farmer from the db
router.delete('/farmers/:id', function(req, res){
  res.send({ type: 'DELETE'});
});

module.exports = router;
