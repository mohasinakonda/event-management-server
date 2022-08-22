const { Schema, default: mongoose } = require("mongoose");
const EventRegister = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  userPhone: {
    type: String,
    required: true,
  },
  guardianName: {
    type: String,
    required: true,
  },
  guardianPhone: {
    type: String,
    required: true,
  },
  guardianEmail: {
    type: String,
    required: true,
  },
  relation: {
    type: String,
    required: true,
  },
  birthDate: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  institution: {
    type: String,
    required: true,
  },
  relation: {
    type: Number,
    required: true,
  },
  isRegister: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("eventRegister", EventRegister);
