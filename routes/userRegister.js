const { userRegister } = require("../controllers/userRegister");

const router = require("express").Router();

router.post("/", userRegister);
module.exports = router;
