const Event_Register = require("../models/Event_Register");
const eventRegister = async (req, res, next) => {
  const userRegister = new Event_Register(req.body);
  try {
    const saveUser = await userRegister.save();
    res.status(200).json(saveUser);
  } catch (err) {
    next(err);
  }
};

const getRegisterUser = async (req, res, next) => {
  try {
    const registerUser = await Event_Register.find();
    res.status(200).json(registerUser);
  } catch (err) {
    next(err);
  }
};

module.exports = { eventRegister, getRegisterUser };
