const jsonwebtoken = require("jsonwebtoken");

const secret = process.env.JWT_SECRET;

const sing = (payload) => {
  return jsonwebtoken.sign(payload, secret, { expiresIn: "1h" });
};

const verify = (token) => {
  return jsonwebtoken.verify(token, secret);
};

module.exports = { sing, verify };
