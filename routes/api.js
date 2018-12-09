const express = require('express');
const router = express.Router();
const Farmer = require('../models/farmer');

// get a list of farmers from the db
router.get('/farmers', function(req, res, next){
  Farmer.find({}).then(function(ninjas){
    res.send(ninjas);
  });
});
/*router.get('/ninjas', function(req, res, next){
    Ninja.find({}).then(function(ninjas){
        res.send(ninjas);
    });*/
    /*Ninja.geoNear(
        {type: 'Point', coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
        {maxDistance: 100000, spherical: true}
    ).then(function(ninjas){
        res.send(ninjas);
    }).catch(next);
});*/

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
