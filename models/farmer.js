const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// geolocation schema
const GeoSchema = new Schema({
  type: {
    type: String,
    default: "Point"
  },
  coordinates: {
    type: [Number],
    index: "2dsphere"
  }
});

// create farmer Schema & model
const FarmerScherma = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required']
  },
  product: {
    type: String
  },
  available: {
    type: Boolean,
    default: false
  },
  geometry: GeoSchema
});

const Farmer = mongoose.model('farmer', FarmerScherma);

module.exports = Farmer;
