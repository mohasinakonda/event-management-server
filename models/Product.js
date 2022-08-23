const { Schema, default: mongoose } = require("mongoose");
const ProductsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  priceMoney: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  ageRange: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  photos: {
    type: [],
  },
});

module.exports = mongoose.model("Products", ProductsSchema);
