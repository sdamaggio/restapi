const express = require('express');
const router = express.Router();
const Farmer = require('../models/farmer');
const _ = require('lodash');

// get a list of farmers from the db
router.get('/farmers', function(req, res, next){
  Farmer.find({}).then(function(farmers){
    res.send(farmers);
  });
});


// get a list of farmers from the db with the distance from submitted lat, lng
/*
router.get('/farmers', function(req, res, next){
  console.log('GET /farmers', req.query);

  var lat = parseFloat(req.query.lat);
  var lng = parseFloat(req.query.lng);
  var options = { near: [lng,lat], maxDistance: 100000};

  if (!_.isNumber(lat) || ! _.isNumber(lng)) {
    return res.status(409).send('MalformedInput');
  }
  Farmer.geoSearch(
    {type: 'Point'}, options, function(err, res) {
      console.log(res);
    }
  ).then(function(farmers){
    res.send(farmers);
  }).catch(next);
});
*/

// add new farmer to the db
router.post('/farmers', function(req, res, next){
  Farmer.create(req.body).then(function(farmer){
    res.send(farmer);
  }).catch(next);
});

// update a farmer in the db
router.put('/farmers/:id', function(req, res, next){
  Farmer.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
    Farmer.findOne({_id: req.params.id}).then(function(farmer){
      res.send(farmer);
    });
  }).catch(next);
});

// delete a farmer from the db
router.delete('/farmers/:id', function(req, res, next){
  Farmer.findByIdAndRemove({_id: req.params.id}).then(function(farmer){
    res.send(farmer);
  });
});

module.exports = router;
