const express = require("express");
const cors = require("cors");
require("dotenv/config");
const app = express();
const port = process.env.PORT || 8000;

//built in middleware
app.use(express.json());
app.use(cors());

// custom middleware

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
