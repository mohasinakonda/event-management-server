const Event_Register = require("../models/Event_Register");
const userRegister = async (req, res, next) => {
  const userRegister = new Event_Register(req.body);
  try {
    const saveUser = await userRegister.save();
    res.status(200).json(saveUser);
  } catch (err) {
    next(err);
  }
};

module.exports = { userRegister };
