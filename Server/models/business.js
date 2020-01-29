const mongoose = require('mongoose');
// const schema = mongoose.schema;

let Business = mongoose.Schema({
  person_name: {
    type: String
  },
  business_name: {
    type: String
  },
  business_gst_number: {
    type: Number
  }
},
  {
    collection: 'business'
  });

module.exports = mongoose.model('Business', Business)
