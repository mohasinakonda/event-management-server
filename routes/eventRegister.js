const {
  eventRegister,
  getRegisterUser,
} = require("../controllers/eventRegister");

const router = require("express").Router();

router.post("/", eventRegister);
router.get("/", getRegisterUser);
module.exports = router;
