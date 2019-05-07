const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dimsumbuddy');

const dimsumSchema = new mongoose.Schema({
  name: String,
  chars: String,
  pseudo_canto_pronunciation: String,
  category: Array,
  vegetarian: Boolean,
  image_url: String,
  other_names: Array,
  description: String,
});

const Dimsum = mongoose.model('Dimsum', dimsumSchema);

module.exports = Dimsum;
