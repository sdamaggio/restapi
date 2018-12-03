const express = require('express');
const router = express.Router();

// get a list of farmers from the db
router.get('/farmers', function(req, res){
  res.send({ trype: 'GET'});
});

router.post('/farmers', function(req, res){
  res.send({ trype: 'POST'});
});

router.put('/farmers/:id', function(req, res){
  res.send({ trype: 'PUT'});
});

router.delete('/farmers/:id', function(req, res){
  res.send({ trype: 'DELETE'});
});

module.exports = router;
