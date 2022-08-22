const { Schema, default: mongoose } = require("mongoose");
const ProductsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  photos: {
    type: [],
    required: true,
  },
});

module.exports = mongoose.model("Products", ProductsSchema);
