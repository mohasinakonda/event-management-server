const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
require("dotenv/config");
const app = express();
const port = process.env.PORT || 8000;

// connect with mongodb database
const connect = async () => {
  try {
    await mongoose.connect(process.env.URI);
  } catch (err) {
    throw err;
  }
};
//built in middleware
app.use(express.json());
app.use(cors());

// custom middleware

app.listen(port, () => {
  connect();
  console.log(`server is running on port ${port}`);
});
