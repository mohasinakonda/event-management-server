const express = require("express");
const cors = require("cors");
// const { userRegister } = require("./controllers/userRegister.js");
// const { product } = require("./controllers/product.js");
const eventRegister = require("./routes/eventRegister.js");
const product = require("./routes/products.js");
const { default: mongoose } = require("mongoose");
require("dotenv/config");
const app = express();
const port = process.env.PORT || 8000;

// connect with mongodb database
const connect = async () => {
  try {
    await mongoose.connect(process.env.URI);
    console.log("db connected");
    console.log("db connected");
  } catch (err) {
    throw err;
  }
};
//built in middleware
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send({ success: true });
});
// custom middleware
app.use("/event-register", eventRegister);
app.use("/product", product);

app.use((error, _req, res, next) => {
  const errorStatus = error.status || 500;
  const errorMessage = error.message || "something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
  });
});

app.listen(port, () => {
  connect();
  console.log(`server is running on port ${port}`);
});
