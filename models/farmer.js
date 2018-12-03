const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create farmer Schema & model
const FarmerScherma = new Schema({
  name: {
    type: String,
    required: [true, 'Mame field is required']
  },
  product: {
    type: String
  },
  available: {
    type: Boolean,
    default: false
  }
  // add in geolocation
});

const Farmer = mongoose.model('farmer', FarmerScherma);

module.exports = Farmer;
