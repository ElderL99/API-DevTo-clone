const bcrypt = require("bcryptjs");

const SALT_ROUNDS = 10;

const encrypt = (planText) => {
  return bcrypt.hashSync(planText, SALT_ROUNDS);
};

const compareText = (planText, hash) => {
  return bcrypt.compareSync(planText, hash);
};

module.exports = {
  encrypt,
  compareText,
};
